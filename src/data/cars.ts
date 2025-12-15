import { Car } from '@/types/car';

export const initialCars: Car[] = [
  {
    id: '1',
    make: 'Mercedes-Benz',
    model: 'E-Class W213',
    year: 2021,
    mileageKm: 45000,
    priceAzn: 85000,
    city: 'Baku',
    fuelType: 'gasoline',
    transmission: 'automatic',
    engine: '2.0L Turbo',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?w=800&q=80'
    ],
    description: 'Stunning Mercedes-Benz E-Class in pristine condition. Features include panoramic sunroof, premium leather interior, advanced driver assistance systems, and ambient lighting. Full service history available.',
    color: 'Obsidian Black',
    drivetrain: 'RWD',
    vin: 'WDD2130421A123456',
    ownersCount: 1,
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    make: 'BMW',
    model: '5 Series G30',
    year: 2020,
    mileageKm: 62000,
    priceAzn: 72000,
    city: 'Baku',
    fuelType: 'diesel',
    transmission: 'automatic',
    engine: '3.0L TwinPower Turbo',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=800&q=80',
      'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=800&q=80'
    ],
    description: 'Powerful BMW 5 Series with M Sport package. Equipped with heads-up display, gesture control, wireless charging, and Harman Kardon sound system. Excellent fuel efficiency for its class.',
    color: 'Alpine White',
    drivetrain: 'RWD',
    ownersCount: 2,
    createdAt: '2024-01-10'
  },
  {
    id: '3',
    make: 'Toyota',
    model: 'Camry XV70',
    year: 2022,
    mileageKm: 28000,
    priceAzn: 55000,
    city: 'Sumqayit',
    fuelType: 'hybrid',
    transmission: 'automatic',
    engine: '2.5L Hybrid',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&q=80',
      'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80'
    ],
    description: 'Reliable Toyota Camry Hybrid with exceptional fuel economy. Features Toyota Safety Sense, JBL audio system, leather seats, and wireless Apple CarPlay. Perfect for daily commuting.',
    color: 'Pearl White',
    drivetrain: 'FWD',
    ownersCount: 1,
    createdAt: '2024-02-01'
  },
  {
    id: '4',
    make: 'Audi',
    model: 'A6 C8',
    year: 2019,
    mileageKm: 78000,
    priceAzn: 65000,
    city: 'Baku',
    fuelType: 'gasoline',
    transmission: 'automatic',
    engine: '2.0L TFSI',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80',
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80'
    ],
    description: 'Elegant Audi A6 with Quattro all-wheel drive. Features virtual cockpit, matrix LED headlights, Bang & Olufsen sound, and massage seats. Well maintained with complete documentation.',
    color: 'Mythos Black',
    drivetrain: 'AWD',
    vin: 'WAUZZZF21KN123456',
    ownersCount: 1,
    createdAt: '2024-01-20'
  },
  {
    id: '5',
    make: 'Lexus',
    model: 'ES 350',
    year: 2021,
    mileageKm: 35000,
    priceAzn: 78000,
    city: 'Baku',
    fuelType: 'gasoline',
    transmission: 'automatic',
    engine: '3.5L V6',
    images: [
      'https://images.unsplash.com/photo-1622194992510-fbb8a39decc4?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80'
    ],
    description: 'Luxurious Lexus ES with Mark Levinson audio, heated and ventilated seats, panoramic view monitor, and advanced safety features. Whisper-quiet cabin with exceptional ride comfort.',
    color: 'Sonic Silver',
    drivetrain: 'FWD',
    ownersCount: 1,
    createdAt: '2024-02-05'
  },
  {
    id: '6',
    make: 'Hyundai',
    model: 'Sonata DN8',
    year: 2023,
    mileageKm: 12000,
    priceAzn: 48000,
    city: 'Ganja',
    fuelType: 'gasoline',
    transmission: 'automatic',
    engine: '2.5L GDI',
    images: [
      'https://images.unsplash.com/photo-1629897048514-3dd7414fe72a?w=800&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80'
    ],
    description: 'Nearly new Hyundai Sonata with bold styling and modern tech. Features digital key, Bose audio, wireless charging, and full LED lighting. Factory warranty still valid.',
    color: 'Hampton Gray',
    drivetrain: 'FWD',
    ownersCount: 1,
    createdAt: '2024-02-10'
  },
  {
    id: '7',
    make: 'Kia',
    model: 'K5 GT-Line',
    year: 2022,
    mileageKm: 22000,
    priceAzn: 52000,
    city: 'Baku',
    fuelType: 'gasoline',
    transmission: 'automatic',
    engine: '2.5L Turbo',
    images: [
      'https://images.unsplash.com/photo-1619976215249-0b36a5bb8f59?w=800&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&q=80'
    ],
    description: 'Sporty Kia K5 GT-Line with turbocharged engine. Features sport-tuned suspension, GT-Line exclusive styling, 12.3" display, and premium Nappa leather. Excellent performance sedan.',
    color: 'Gravity Gray',
    drivetrain: 'FWD',
    ownersCount: 1,
    createdAt: '2024-01-25'
  },
  {
    id: '8',
    make: 'Volkswagen',
    model: 'Passat B8',
    year: 2020,
    mileageKm: 55000,
    priceAzn: 42000,
    city: 'Lankaran',
    fuelType: 'diesel',
    transmission: 'manual',
    engine: '2.0L TDI',
    images: [
      'https://images.unsplash.com/photo-1632245889029-e406faaa34cd?w=800&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&q=80'
    ],
    description: 'Economical Volkswagen Passat with efficient diesel engine. Features adaptive cruise control, lane assist, park assist, and digital cockpit. Great for long-distance driving.',
    color: 'Deep Black Pearl',
    drivetrain: 'FWD',
    ownersCount: 2,
    createdAt: '2024-01-05'
  }
];
