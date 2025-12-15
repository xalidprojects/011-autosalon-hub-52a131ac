import { Filters } from '@/types/car';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { X, Filter, RotateCcw } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';

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
      {/* Price Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Price (AZN)</Label>
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
            placeholder="Max"
            value={filters.priceMax ?? ''}
            onChange={(e) => onFilterChange('priceMax', parseNumber(e.target.value))}
            className="h-10"
          />
        </div>
      </div>

      {/* Year Range */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Year</Label>
        <div className="grid grid-cols-2 gap-2">
          <Input
            type="number"
            placeholder="From"
            min={1990}
            max={currentYear}
            value={filters.yearMin ?? ''}
            onChange={(e) => onFilterChange('yearMin', parseNumber(e.target.value))}
            className="h-10"
          />
          <Input
            type="number"
            placeholder="To"
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
        <Label className="text-sm font-medium text-foreground">Mileage (km)</Label>
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
            placeholder="Max"
            value={filters.mileageMax ?? ''}
            onChange={(e) => onFilterChange('mileageMax', parseNumber(e.target.value))}
            className="h-10"
          />
        </div>
      </div>

      {/* Fuel Type */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Fuel Type</Label>
        <Select
          value={filters.fuelType || 'all'}
          onValueChange={(value) => onFilterChange('fuelType', value === 'all' ? null : value)}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="All fuel types" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All fuel types</SelectItem>
            <SelectItem value="gasoline">Gasoline</SelectItem>
            <SelectItem value="diesel">Diesel</SelectItem>
            <SelectItem value="hybrid">Hybrid</SelectItem>
            <SelectItem value="electric">Electric</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Transmission */}
      <div className="space-y-3">
        <Label className="text-sm font-medium text-foreground">Transmission</Label>
        <Select
          value={filters.transmission || 'all'}
          onValueChange={(value) => onFilterChange('transmission', value === 'all' ? null : value)}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="All transmissions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All transmissions</SelectItem>
            <SelectItem value="automatic">Automatic</SelectItem>
            <SelectItem value="manual">Manual</SelectItem>
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
        Reset Filters
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
          Filters
          {activeFiltersCount > 0 && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-display text-lg">Filters</SheetTitle>
        </SheetHeader>
        <FilterContent filters={filters} onFilterChange={onFilterChange} onReset={onReset} />
        <SheetClose asChild>
          <Button className="mt-6 w-full">Apply Filters</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
