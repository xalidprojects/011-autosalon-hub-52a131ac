import { Car } from '@/types/car';
import { CarCard } from './CarCard';
import { Button } from '@/components/ui/button';
import { Car as CarIcon } from 'lucide-react';

interface CarGridProps {
  cars: Car[];
  displayCount: number;
  onLoadMore: () => void;
}

export function CarGrid({ cars, displayCount, onLoadMore }: CarGridProps) {
  const displayedCars = cars.slice(0, displayCount);
  const hasMore = displayCount < cars.length;

  if (cars.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
          <CarIcon className="h-10 w-10 text-muted-foreground" />
        </div>
        <h3 className="mb-2 font-display text-xl font-semibold">Avtomobil tapılmadı</h3>
        <p className="text-muted-foreground">
          Filterlər və ya axtarış meyarlarını dəyişdirməyə çalışın
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {displayedCars.map((car, index) => (
          <div
            key={car.id}
            className="animate-fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <CarCard car={car} />
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            size="lg"
            onClick={onLoadMore}
            className="min-w-[200px]"
          >
            Daha çox yüklə ({cars.length - displayCount} qalıb)
          </Button>
        </div>
      )}
    </div>
  );
}
