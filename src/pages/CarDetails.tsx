import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCars } from '@/hooks/useCars';
import { Header } from '@/components/Header';
import { ImageGallery } from '@/components/ImageGallery';
import { SimilarCars } from '@/components/SimilarCars';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Calendar,
  Gauge,
  Fuel,
  Settings2,
  Palette,
  Car,
  Users,
  MapPin,
  Hash,
} from 'lucide-react';

export default function CarDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { cars, getCarById, isLoaded } = useCars();

  const car = isLoaded && id ? getCarById(id) : null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('az-AZ').format(price);
  };

  const formatMileage = (km: number) => {
    return new Intl.NumberFormat('az-AZ').format(km);
  };

  const getFuelLabel = (fuel: string) => {
    const labels: Record<string, string> = {
      gasoline: 'Benzin',
      diesel: 'Dizel',
      hybrid: 'Hibrid',
      electric: 'Elektrik',
    };
    return labels[fuel] || fuel;
  };

  const handleCall = () => {
    window.location.href = 'tel:+994501234567';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Salam, ${car?.make} ${car?.model} (${car?.year}) ilə maraqlanıram`);
    window.open(`https://wa.me/994501234567?text=${message}`, '_blank');
  };

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-8">
          <div className="animate-pulse space-y-6">
            <div className="aspect-video rounded-xl bg-muted" />
            <div className="h-10 w-2/3 rounded bg-muted" />
            <div className="h-6 w-1/3 rounded bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Car className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="mb-2 font-display text-2xl font-bold">Avtomobil tapılmadı</h1>
          <p className="mb-6 text-muted-foreground">
            Axtardığınız avtomobil mövcud deyil və ya silinib.
          </p>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Elanlara qayıt
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const specs = [
    { icon: Calendar, label: 'İl', value: car.year.toString() },
    { icon: Gauge, label: 'Yürüş', value: `${formatMileage(car.mileageKm)} km` },
    { icon: Settings2, label: 'Mühərrik', value: car.engine },
    { icon: Fuel, label: 'Yanacaq', value: getFuelLabel(car.fuelType) },
    { icon: Settings2, label: 'Sürətlər qutusu', value: car.transmission === 'automatic' ? 'Avtomat' : 'Mexaniki' },
    ...(car.color ? [{ icon: Palette, label: 'Rəng', value: car.color }] : []),
    ...(car.drivetrain ? [{ icon: Car, label: 'Ötürmə', value: car.drivetrain }] : []),
    ...(car.ownersCount ? [{ icon: Users, label: 'Sahiblər', value: car.ownersCount.toString() }] : []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Elanlara qayıt
        </Button>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Image Gallery */}
            <ImageGallery images={car.images} alt={`${car.make} ${car.model}`} />

            {/* Description */}
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-display text-xl font-semibold">Təsvir</h2>
              <p className="leading-relaxed text-muted-foreground">
                {car.description || 'Təsvir mövcud deyil.'}
              </p>
            </section>

            {/* Specifications */}
            <section className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-display text-xl font-semibold">Spesifikasiyalar</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {specs.map((spec) => (
                  <div key={spec.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <spec.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{spec.label}</p>
                      <p className="font-medium">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              {car.vin && (
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <Hash className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">VIN</p>
                    <p className="font-mono text-sm font-medium">{car.vin}</p>
                  </div>
                </div>
              )}
            </section>
          </div>

          {/* Right Column - Sticky Card */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <div className="rounded-xl border border-border bg-card p-6 shadow-medium">
              {/* Title & Price */}
              <div className="mb-6">
                <h1 className="mb-2 font-display text-2xl font-bold">
                  {car.make} {car.model}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{car.city}</span>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 rounded-lg bg-gradient-primary p-4 text-center">
                <p className="text-sm font-medium text-primary-foreground/80">Qiymət</p>
                <p className="font-display text-3xl font-bold text-primary-foreground">
                  {formatPrice(car.priceAzn)} ₼
                </p>
              </div>

              {/* Badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                <Badge variant="secondary">{car.year}</Badge>
                <Badge variant="secondary">{formatMileage(car.mileageKm)} km</Badge>
                <Badge variant="secondary">{getFuelLabel(car.fuelType)}</Badge>
                <Badge variant="secondary" className="capitalize">{car.transmission}</Badge>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleCall}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  İndi zəng et
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  size="lg"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 border-t border-border pt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Telefon: <span className="font-medium text-foreground">+994 50 123 45 67</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Cars */}
        <SimilarCars currentCar={car} allCars={cars} />
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
