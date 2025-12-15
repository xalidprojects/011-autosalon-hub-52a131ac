import { Car } from '@/types/car';
import { CarCard } from './CarCard';

interface SimilarCarsProps {
  currentCar: Car;
  allCars: Car[];
}

export function SimilarCars({ currentCar, allCars }: SimilarCarsProps) {
  // Find similar cars by same make or similar price range (±20%)
  const similar = allCars
    .filter((car) => car.id !== currentCar.id)
    .filter((car) => {
      const sameMake = car.make === currentCar.make;
      const priceDiff = Math.abs(car.priceAzn - currentCar.priceAzn) / currentCar.priceAzn;
      const similarPrice = priceDiff <= 0.2;
      return sameMake || similarPrice;
    })
    .slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="mb-6 font-display text-2xl font-semibold">Oxşar avtomobillər</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {similar.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
