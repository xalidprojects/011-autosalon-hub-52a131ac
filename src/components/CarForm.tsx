import { useState, useEffect, useRef } from 'react';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Upload } from 'lucide-react';
import { getAllMakes, getModelsByMake } from '@/data/carBrands';

interface CarFormProps {
  car?: Car;
  onSubmit: (data: Omit<Car, 'id' | 'createdAt'>) => void;
  onCancel: () => void;
}

const defaultFormData = {
  make: '',
  model: '',
  year: new Date().getFullYear(),
  mileageKm: 0,
  priceAzn: 0,
  city: '',
  fuelType: 'gasoline' as const,
  transmission: 'automatic' as const,
  engine: '',
  images: [] as string[],
  description: '',
  color: '',
  drivetrain: undefined as Car['drivetrain'],
  vin: '',
  ownersCount: 1,
};

export function CarForm({ car, onSubmit, onCancel }: CarFormProps) {
  const [formData, setFormData] = useState(car ? { ...car } : defaultFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (car) {
      setFormData({ ...car });
    }
  }, [car]);

  const updateField = <K extends keyof typeof formData>(
    field: K,
    value: typeof formData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith('image/')) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        setFormData((prev) => ({
          ...prev,
          images: [...prev.images, base64],
        }));
        if (errors.images) {
          setErrors((prev) => ({ ...prev, images: '' }));
        }
      };
      reader.readAsDataURL(file);
    });

    // Reset input so same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.make.trim()) newErrors.make = 'Marka tələb olunur';
    if (!formData.model.trim()) newErrors.model = 'Model tələb olunur';
    if (formData.year < 1900 || formData.year > new Date().getFullYear() + 1) {
      newErrors.year = 'Yanlış il';
    }
    if (formData.priceAzn <= 0) newErrors.priceAzn = 'Qiymət müsbət olmalıdır';
    if (!formData.city.trim()) newErrors.city = 'Şəhər tələb olunur';
    if (!formData.engine.trim()) newErrors.engine = 'Mühərrik tələb olunur';
    if (formData.images.filter(img => img.trim()).length === 0) {
      newErrors.images = 'Ən azı bir şəkil tələb olunur';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({
        ...formData,
        images: formData.images.filter(img => img.trim()),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="make">Marka *</Label>
          <Select
            value={formData.make || 'select'}
            onValueChange={(value) => {
              updateField('make', value === 'select' ? '' : value);
              updateField('model', '');
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Marka seçin" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              <SelectItem value="select">Marka seçin</SelectItem>
              {getAllMakes().map((make) => (
                <SelectItem key={make} value={make}>{make}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.make && <p className="text-sm text-destructive">{errors.make}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="model">Model *</Label>
          <Select
            value={formData.model || 'select'}
            onValueChange={(value) => updateField('model', value === 'select' ? '' : value)}
            disabled={!formData.make}
          >
            <SelectTrigger>
              <SelectValue placeholder="Model seçin" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              <SelectItem value="select">Model seçin</SelectItem>
              {formData.make && getModelsByMake(formData.make).map((model) => (
                <SelectItem key={model} value={model}>{model}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.model && <p className="text-sm text-destructive">{errors.model}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="year">İl *</Label>
          <Input
            id="year"
            type="number"
            value={formData.year}
            onChange={(e) => updateField('year', parseInt(e.target.value) || 0)}
            min={1900}
            max={new Date().getFullYear() + 1}
          />
          {errors.year && <p className="text-sm text-destructive">{errors.year}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Qiymət (AZN) *</Label>
          <Input
            id="price"
            type="number"
            value={formData.priceAzn}
            onChange={(e) => updateField('priceAzn', parseInt(e.target.value) || 0)}
            min={0}
          />
          {errors.priceAzn && <p className="text-sm text-destructive">{errors.priceAzn}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="mileage">Yürüş (km)</Label>
          <Input
            id="mileage"
            type="number"
            value={formData.mileageKm}
            onChange={(e) => updateField('mileageKm', parseInt(e.target.value) || 0)}
            min={0}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="city">Şəhər *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => updateField('city', e.target.value)}
            placeholder="məs., Bakı"
          />
          {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="engine">Mühərrik *</Label>
          <Input
            id="engine"
            value={formData.engine}
            onChange={(e) => updateField('engine', e.target.value)}
            placeholder="məs., 2.0L Turbo"
          />
          {errors.engine && <p className="text-sm text-destructive">{errors.engine}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Yanacaq növü</Label>
          <Select
            value={formData.fuelType}
            onValueChange={(value: Car['fuelType']) => updateField('fuelType', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gasoline">Benzin</SelectItem>
              <SelectItem value="diesel">Dizel</SelectItem>
              <SelectItem value="hybrid">Hibrid</SelectItem>
              <SelectItem value="electric">Elektrik</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Sürətlər qutusu</Label>
          <Select
            value={formData.transmission}
            onValueChange={(value: Car['transmission']) => updateField('transmission', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="automatic">Avtomat</SelectItem>
              <SelectItem value="manual">Mexaniki</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Optional Fields */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="color">Rəng</Label>
          <Input
            id="color"
            value={formData.color || ''}
            onChange={(e) => updateField('color', e.target.value)}
            placeholder="məs., Qara"
          />
        </div>
        <div className="space-y-2">
          <Label>Ötürmə</Label>
          <Select
            value={formData.drivetrain || 'none'}
            onValueChange={(value) => updateField('drivetrain', value === 'none' ? undefined : value as Car['drivetrain'])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Ötürmə seçin" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Qeyd edilməyib</SelectItem>
              <SelectItem value="FWD">Ön ötürmə</SelectItem>
              <SelectItem value="RWD">Arxa ötürmə</SelectItem>
              <SelectItem value="AWD">Tam ötürmə</SelectItem>
              <SelectItem value="4WD">4x4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="owners">Sahib sayı</Label>
          <Input
            id="owners"
            type="number"
            value={formData.ownersCount || 1}
            onChange={(e) => updateField('ownersCount', parseInt(e.target.value) || 1)}
            min={1}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vin">VIN (ixtiyari)</Label>
        <Input
          id="vin"
          value={formData.vin || ''}
          onChange={(e) => updateField('vin', e.target.value)}
          placeholder="Avtomobilin identifikasiya nömrəsi"
        />
      </div>

      {/* Images */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Şəkillər *</Label>
          <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
            <Upload className="mr-1 h-4 w-4" />
            Şəkil yüklə
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
        {errors.images && <p className="text-sm text-destructive">{errors.images}</p>}
        
        {formData.images.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {formData.images.map((image, index) => (
              <div key={index} className="group relative aspect-video overflow-hidden rounded-lg border border-border bg-muted">
                <img
                  src={image}
                  alt={`Car image ${index + 1}`}
                  className="h-full w-full object-cover"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeImage(index)}
                  className="absolute right-1 top-1 h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div 
            className="flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border p-8 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="mb-2 h-8 w-8" />
            <p className="text-sm">Şəkil yükləmək üçün klikləyin</p>
          </div>
        )}
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Təsvir</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Avtomobil haqqında məlumat daxil edin..."
          rows={4}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-border pt-6">
        <Button type="button" variant="outline" onClick={onCancel}>
          Ləğv et
        </Button>
        <Button type="submit">
          {car ? 'Yenilə' : 'Əlavə et'}
        </Button>
      </div>
    </form>
  );
}
