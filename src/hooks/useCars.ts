import { useState, useEffect, useMemo } from 'react';
import { Car, Filters, SortOption } from '@/types/car';
import { initialCars } from '@/data/cars';

const STORAGE_KEY = 'autosalon_cars';

export function useCars() {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setCars(JSON.parse(stored));
      } catch {
        setCars(initialCars);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCars));
      }
    } else {
      setCars(initialCars);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialCars));
    }
    setIsLoaded(true);
  }, []);

  const saveCars = (newCars: Car[]) => {
    setCars(newCars);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCars));
  };

  const addCar = (car: Omit<Car, 'id' | 'createdAt'>) => {
    const newCar: Car = {
      ...car,
      id: Date.now().toString(),
      createdAt: new Date().toISOString().split('T')[0],
    };
    saveCars([newCar, ...cars]);
    return newCar;
  };

  const updateCar = (id: string, updates: Partial<Car>) => {
    const updated = cars.map(car => 
      car.id === id ? { ...car, ...updates } : car
    );
    saveCars(updated);
  };

  const deleteCar = (id: string) => {
    saveCars(cars.filter(car => car.id !== id));
  };

  const getCarById = (id: string) => cars.find(car => car.id === id);

  const resetToInitial = () => {
    saveCars(initialCars);
  };

  return { cars, isLoaded, addCar, updateCar, deleteCar, getCarById, resetToInitial };
}

export function useFilteredCars(
  cars: Car[],
  filters: Filters,
  sort: SortOption
) {
  return useMemo(() => {
    let filtered = [...cars];

    // Search filter
    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(car =>
        `${car.make} ${car.model}`.toLowerCase().includes(search)
      );
    }

    // Make filter
    if (filters.make) {
      filtered = filtered.filter(car => car.make === filters.make);
    }

    // Model filter
    if (filters.model) {
      filtered = filtered.filter(car => car.model === filters.model);
    }

    // Price filter
    if (filters.priceMin !== null) {
      filtered = filtered.filter(car => car.priceAzn >= filters.priceMin!);
    }
    if (filters.priceMax !== null) {
      filtered = filtered.filter(car => car.priceAzn <= filters.priceMax!);
    }

    // Year filter
    if (filters.yearMin !== null) {
      filtered = filtered.filter(car => car.year >= filters.yearMin!);
    }
    if (filters.yearMax !== null) {
      filtered = filtered.filter(car => car.year <= filters.yearMax!);
    }

    // Mileage filter
    if (filters.mileageMin !== null) {
      filtered = filtered.filter(car => car.mileageKm >= filters.mileageMin!);
    }
    if (filters.mileageMax !== null) {
      filtered = filtered.filter(car => car.mileageKm <= filters.mileageMax!);
    }

    // Fuel type filter
    if (filters.fuelType) {
      filtered = filtered.filter(car => car.fuelType === filters.fuelType);
    }

    // Transmission filter
    if (filters.transmission) {
      filtered = filtered.filter(car => car.transmission === filters.transmission);
    }

    // Sort
    switch (sort) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'price-low':
        filtered.sort((a, b) => a.priceAzn - b.priceAzn);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.priceAzn - a.priceAzn);
        break;
      case 'mileage-low':
        filtered.sort((a, b) => a.mileageKm - b.mileageKm);
        break;
    }

    return filtered;
  }, [cars, filters, sort]);
}
