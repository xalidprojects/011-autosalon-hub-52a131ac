import { Filters } from '@/types/car';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter, RotateCcw } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { getAllMakes, getModelsByMake } from '@/data/carBrands';

interface FilterPanelProps {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string | number | null) => void;
  onReset: () => void;
  activeFiltersCount: number;
}

const currentYear = new Date().getFullYear();

function FilterContent({
  filters,
  onFilterChange,
  onReset,
}: {
  filters: Filters;
  onFilterChange: (key: keyof Filters, value: string | number | null) => void;
  onReset: () => void;
}) {
  const parseNumber = (value: string): number | null => {
    const num = parseInt(value, 10);
    return isNaN(num) ? null : num;
  };

  return (
    <div className="space-y-6">
      {/* Make */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Marka</Label>
        <Select
          value={filters.make || 'all'}
          onValueChange={(value) => {
            onFilterChange('make', value === 'all' ? null : value);
            onFilterChange('model', null);
          }}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Bütün markalar" />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            <SelectItem value="all">Bütün markalar</SelectItem>
            {getAllMakes().map((make) => (
              <SelectItem key={make} value={make}>{make}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Model */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Model</Label>
        <Select
          value={filters.model || 'all'}
          onValueChange={(value) => onFilterChange('model', value === 'all' ? null : value)}
          disabled={!filters.make}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Bütün modellər" />
          </SelectTrigger>
          <SelectContent className="max-h-60">
            <SelectItem value="all">Bütün modellər</SelectItem>
            {filters.make && getModelsByMake(filters.make).map((model) => (
              <SelectItem key={model} value={model}>{model}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Qiymət (AZN)</Label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={filters.priceMin ?? ''}
            onChange={(e) => onFilterChange('priceMin', parseNumber(e.target.value))}
            className="h-10"
          />
          <Input
            type="number"
            placeholder="Maks"
            value={filters.priceMax ?? ''}
            onChange={(e) => onFilterChange('priceMax', parseNumber(e.target.value))}
            className="h-10"
          />
        </div>
      </div>

      {/* Year Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">İl</Label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Dan"
            min={1990}
            max={currentYear}
            value={filters.yearMin ?? ''}
            onChange={(e) => onFilterChange('yearMin', parseNumber(e.target.value))}
            className="h-10"
          />
          <Input
            type="number"
            placeholder="Dək"
            min={1990}
            max={currentYear}
            value={filters.yearMax ?? ''}
            onChange={(e) => onFilterChange('yearMax', parseNumber(e.target.value))}
            className="h-10"
          />
        </div>
      </div>

      {/* Mileage Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Yürüş (km)</Label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="Min"
            value={filters.mileageMin ?? ''}
            onChange={(e) => onFilterChange('mileageMin', parseNumber(e.target.value))}
            className="h-10"
          />
          <Input
            type="number"
            placeholder="Maks"
            value={filters.mileageMax ?? ''}
            onChange={(e) => onFilterChange('mileageMax', parseNumber(e.target.value))}
            className="h-10"
          />
        </div>
      </div>

      {/* Fuel Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Yanacaq növü</Label>
        <Select
          value={filters.fuelType || 'all'}
          onValueChange={(value) => onFilterChange('fuelType', value === 'all' ? null : value)}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Bütün yanacaq növləri" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Bütün yanacaq növləri</SelectItem>
            <SelectItem value="gasoline">Benzin</SelectItem>
            <SelectItem value="diesel">Dizel</SelectItem>
            <SelectItem value="hybrid">Hibrid</SelectItem>
            <SelectItem value="electric">Elektrik</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Transmission */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Sürətlər qutusu</Label>
        <Select
          value={filters.transmission || 'all'}
          onValueChange={(value) => onFilterChange('transmission', value === 'all' ? null : value)}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Bütün sürətlər qutuları" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Bütün sürətlər qutuları</SelectItem>
            <SelectItem value="automatic">Avtomat</SelectItem>
            <SelectItem value="manual">Mexaniki</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full"
        onClick={onReset}
      >
        <RotateCcw className="mr-2 h-4 w-4" />
        Filterləri sıfırla
      </Button>
    </div>
  );
}

export function FilterPanel({ filters, onFilterChange, onReset, activeFiltersCount }: FilterPanelProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filterlər
          {activeFiltersCount > 0 && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-display text-lg">Filterlər</SheetTitle>
        </SheetHeader>
        <FilterContent filters={filters} onFilterChange={onFilterChange} onReset={onReset} />
        <SheetClose asChild>
          <Button className="mt-6 w-full">Tətbiq et</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
