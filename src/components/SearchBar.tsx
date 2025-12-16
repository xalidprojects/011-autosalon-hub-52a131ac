import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getAllMakes, getModelsByMake } from '@/data/carBrands';

interface SearchBarProps {
  make: string | null;
  model: string | null;
  onMakeChange: (value: string | null) => void;
  onModelChange: (value: string | null) => void;
}

export function SearchBar({ make, model, onMakeChange, onModelChange }: SearchBarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Select
        value={make || 'all'}
        onValueChange={(value) => {
          onMakeChange(value === 'all' ? null : value);
          onModelChange(null);
        }}
      >
        <SelectTrigger className="h-12 w-full sm:w-48">
          <SelectValue placeholder="Marka seçin" />
        </SelectTrigger>
        <SelectContent className="max-h-60">
          <SelectItem value="all">Bütün markalar</SelectItem>
          {getAllMakes().map((m) => (
            <SelectItem key={m} value={m}>{m}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select
        value={model || 'all'}
        onValueChange={(value) => onModelChange(value === 'all' ? null : value)}
        disabled={!make}
      >
        <SelectTrigger className="h-12 w-full sm:w-48">
          <SelectValue placeholder="Model seçin" />
        </SelectTrigger>
        <SelectContent className="max-h-60">
          <SelectItem value="all">Bütün modellər</SelectItem>
          {make && getModelsByMake(make).map((m) => (
            <SelectItem key={m} value={m}>{m}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
