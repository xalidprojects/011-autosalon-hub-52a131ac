import { SortOption } from '@/types/car';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpDown } from 'lucide-react';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <ArrowUpDown className="mr-2 h-4 w-4 text-muted-foreground" />
        <SelectValue placeholder="Sırala" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="newest">Ən yenilər</SelectItem>
        <SelectItem value="price-low">Qiymət: Aşağıdan yuxarıya</SelectItem>
        <SelectItem value="price-high">Qiymət: Yuxarıdan aşağıya</SelectItem>
        <SelectItem value="mileage-low">Yürüş: Aşağıdan yuxarıya</SelectItem>
      </SelectContent>
    </Select>
  );
}
