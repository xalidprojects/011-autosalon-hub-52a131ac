import { useState, useEffect } from 'react';
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Plus, Image } from 'lucide-react';

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
  images: [''],
  description: '',
  color: '',
  drivetrain: undefined as Car['drivetrain'],
  vin: '',
  ownersCount: 1,
};

export function CarForm({ car, onSubmit, onCancel }: CarFormProps) {
  const [formData, setFormData] = useState(car ? { ...car } : defaultFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const addImageField = () => {
    setFormData((prev) => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImageField = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const updateImage = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.map((img, i) => (i === index ? value : img)),
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.make.trim()) newErrors.make = 'Make is required';
    if (!formData.model.trim()) newErrors.model = 'Model is required';
    if (formData.year < 1900 || formData.year > new Date().getFullYear() + 1) {
      newErrors.year = 'Invalid year';
    }
    if (formData.priceAzn <= 0) newErrors.priceAzn = 'Price must be positive';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.engine.trim()) newErrors.engine = 'Engine is required';
    if (formData.images.filter(img => img.trim()).length === 0) {
      newErrors.images = 'At least one image URL is required';
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
          <Label htmlFor="make">Make *</Label>
          <Input
            id="make"
            value={formData.make}
            onChange={(e) => updateField('make', e.target.value)}
            placeholder="e.g., Mercedes-Benz"
          />
          {errors.make && <p className="text-sm text-destructive">{errors.make}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="model">Model *</Label>
          <Input
            id="model"
            value={formData.model}
            onChange={(e) => updateField('model', e.target.value)}
            placeholder="e.g., E-Class W213"
          />
          {errors.model && <p className="text-sm text-destructive">{errors.model}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="year">Year *</Label>
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
          <Label htmlFor="price">Price (AZN) *</Label>
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
          <Label htmlFor="mileage">Mileage (km)</Label>
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
          <Label htmlFor="city">City *</Label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => updateField('city', e.target.value)}
            placeholder="e.g., Baku"
          />
          {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="engine">Engine *</Label>
          <Input
            id="engine"
            value={formData.engine}
            onChange={(e) => updateField('engine', e.target.value)}
            placeholder="e.g., 2.0L Turbo"
          />
          {errors.engine && <p className="text-sm text-destructive">{errors.engine}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>Fuel Type</Label>
          <Select
            value={formData.fuelType}
            onValueChange={(value: Car['fuelType']) => updateField('fuelType', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gasoline">Gasoline</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Transmission</Label>
          <Select
            value={formData.transmission}
            onValueChange={(value: Car['transmission']) => updateField('transmission', value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="automatic">Automatic</SelectItem>
              <SelectItem value="manual">Manual</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Optional Fields */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="color">Color</Label>
          <Input
            id="color"
            value={formData.color || ''}
            onChange={(e) => updateField('color', e.target.value)}
            placeholder="e.g., Black"
          />
        </div>
        <div className="space-y-2">
          <Label>Drivetrain</Label>
          <Select
            value={formData.drivetrain || 'none'}
            onValueChange={(value) => updateField('drivetrain', value === 'none' ? undefined : value as Car['drivetrain'])}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select drivetrain" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Not specified</SelectItem>
              <SelectItem value="FWD">FWD</SelectItem>
              <SelectItem value="RWD">RWD</SelectItem>
              <SelectItem value="AWD">AWD</SelectItem>
              <SelectItem value="4WD">4WD</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="owners">Owners Count</Label>
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
        <Label htmlFor="vin">VIN (optional)</Label>
        <Input
          id="vin"
          value={formData.vin || ''}
          onChange={(e) => updateField('vin', e.target.value)}
          placeholder="Vehicle Identification Number"
        />
      </div>

      {/* Images */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label>Image URLs *</Label>
          <Button type="button" variant="outline" size="sm" onClick={addImageField}>
            <Plus className="mr-1 h-4 w-4" />
            Add Image
          </Button>
        </div>
        {errors.images && <p className="text-sm text-destructive">{errors.images}</p>}
        <div className="space-y-2">
          {formData.images.map((image, index) => (
            <div key={index} className="flex gap-2">
              <div className="relative flex-1">
                <Image className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={image}
                  onChange={(e) => updateImage(index, e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="pl-10"
                />
              </div>
              {formData.images.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeImageField(index)}
                  className="text-destructive hover:text-destructive"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => updateField('description', e.target.value)}
          placeholder="Enter car description..."
          rows={4}
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t border-border pt-6">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {car ? 'Update Car' : 'Add Car'}
        </Button>
      </div>
    </form>
  );
}
