import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SearchBar } from '@/components/SearchBar';
import { FilterPanel } from '@/components/FilterPanel';
import { SortSelect } from '@/components/SortSelect';
import { CarGrid } from '@/components/CarGrid';
import { useCars, useFilteredCars } from '@/hooks/useCars';
import { Filters, SortOption } from '@/types/car';
import { Car } from 'lucide-react';

const ITEMS_PER_PAGE = 9;

const defaultFilters: Filters = {
  search: '',
  priceMin: null,
  priceMax: null,
  yearMin: null,
  yearMax: null,
  mileageMin: null,
  mileageMax: null,
  fuelType: null,
  transmission: null,
};

export default function Index() {
  const { cars, isLoaded } = useCars();
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [sort, setSort] = useState<SortOption>('newest');
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);

  const filteredCars = useFilteredCars(cars, filters, sort);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (filters.priceMin !== null || filters.priceMax !== null) count++;
    if (filters.yearMin !== null || filters.yearMax !== null) count++;
    if (filters.mileageMin !== null || filters.mileageMax !== null) count++;
    if (filters.fuelType) count++;
    if (filters.transmission) count++;
    return count;
  }, [filters]);

  const handleFilterChange = (key: keyof Filters, value: string | number | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setDisplayCount(ITEMS_PER_PAGE);
  };

  const handleResetFilters = () => {
    setFilters(defaultFilters);
    setDisplayCount(ITEMS_PER_PAGE);
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* Hero Section */}
        <section className="mb-10 text-center">
          <h1 className="mb-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            İdeal <span className="text-gradient">Avtomobilinizi</span> Tapın
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Premium avtomobil seçimimizi kəşf edin. Keyfiyyətli avtomobillər, şəffaf qiymətlər.
          </p>
        </section>

        {/* Search and Controls */}
        <section className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-full max-w-md">
              <SearchBar
                value={filters.search}
                onChange={(value) => handleFilterChange('search', value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <FilterPanel
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
                activeFiltersCount={activeFiltersCount}
              />
              <SortSelect value={sort} onChange={setSort} />
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Car className="h-4 w-4" />
            <span>
              {filteredCars.length} {filteredCars.length === 1 ? 'avtomobil' : 'avtomobil'} mövcuddur
            </span>
          </div>
        </section>

        {/* Car Grid */}
        {isLoaded ? (
          <CarGrid
            cars={filteredCars}
            displayCount={displayCount}
            onLoadMore={handleLoadMore}
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] animate-pulse rounded-xl bg-muted"
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} 011 Autosalon. Bütün hüquqlar qorunur.
          </p>
        </div>
      </footer>
    </div>
  );
}
