export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  mileageKm: number;
  priceAzn: number;
  city: string;
  fuelType: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
  transmission: 'automatic' | 'manual';
  engine: string;
  images: string[];
  description: string;
  color?: string;
  drivetrain?: 'FWD' | 'RWD' | 'AWD' | '4WD';
  vin?: string;
  ownersCount?: number;
  createdAt: string;
}

export type SortOption = 'newest' | 'price-low' | 'price-high' | 'mileage-low';

export interface Filters {
  search: string;
  make: string | null;
  model: string | null;
  priceMin: number | null;
  priceMax: number | null;
  yearMin: number | null;
  yearMax: number | null;
  mileageMin: number | null;
  mileageMax: number | null;
  fuelType: string | null;
  transmission: string | null;
}
