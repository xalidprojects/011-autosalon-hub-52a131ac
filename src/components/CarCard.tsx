import { Link } from 'react-router-dom';
import { Car } from '@/types/car';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Gauge, Fuel, Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CarCardProps {
  car: Car;
  className?: string;
}

export function CarCard({ car, className }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('az-AZ').format(price);
  };

  const formatMileage = (km: number) => {
    return new Intl.NumberFormat('az-AZ').format(km);
  };

  const getFuelLabel = (fuel: string) => {
    const labels: Record<string, string> = {
      gasoline: 'Gasoline',
      diesel: 'Diesel',
      hybrid: 'Hybrid',
      electric: 'Electric',
    };
    return labels[fuel] || fuel;
  };

  return (
    <Link
      to={`/cars/${car.id}`}
      className={cn(
        'group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-medium',
        className
      )}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={car.images[0]}
          alt={`${car.make} ${car.model}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Price Badge */}
        <div className="absolute bottom-3 left-3">
          <span className="rounded-lg bg-primary px-3 py-1.5 font-display text-lg font-bold text-primary-foreground shadow-lg">
            {formatPrice(car.priceAzn)} ₼
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="mb-2 font-display text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
          {car.make} {car.model}
        </h3>

        {/* Specs Grid */}
        <div className="mb-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Gauge className="h-3.5 w-3.5" />
            <span>{formatMileage(car.mileageKm)} km</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Fuel className="h-3.5 w-3.5" />
            <span>{getFuelLabel(car.fuelType)}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings2 className="h-3.5 w-3.5" />
            <span className="capitalize">{car.transmission}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" />
          <span>{car.city}</span>
        </div>
      </div>
    </Link>
  );
}
