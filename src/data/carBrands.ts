export interface CarBrand {
  name: string;
  models: string[];
}

export const carBrands: CarBrand[] = [
  {
    name: 'Audi',
    models: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'TT', 'R8', 'e-tron', 'RS3', 'RS4', 'RS5', 'RS6', 'RS7']
  },
  {
    name: 'BMW',
    models: ['1 Series', '2 Series', '3 Series', '4 Series', '5 Series', '6 Series', '7 Series', '8 Series', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'i3', 'i4', 'iX', 'M3', 'M4', 'M5']
  },
  {
    name: 'Mercedes-Benz',
    models: ['A-Class', 'B-Class', 'C-Class', 'E-Class', 'S-Class', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'G-Class', 'EQA', 'EQB', 'EQC', 'EQE', 'EQS', 'AMG GT', 'Maybach']
  },
  {
    name: 'Toyota',
    models: ['Corolla', 'Camry', 'Avalon', 'Prius', 'RAV4', 'Highlander', 'Land Cruiser', 'C-HR', 'Yaris', 'Supra', '4Runner', 'Sequoia', 'Tacoma', 'Tundra', 'Sienna', 'Venza']
  },
  {
    name: 'Honda',
    models: ['Civic', 'Accord', 'CR-V', 'HR-V', 'Pilot', 'Passport', 'Odyssey', 'Ridgeline', 'Fit', 'Insight', 'Clarity']
  },
  {
    name: 'Hyundai',
    models: ['Accent', 'Elantra', 'Sonata', 'Azera', 'Kona', 'Tucson', 'Santa Fe', 'Palisade', 'Venue', 'Ioniq', 'Nexo', 'Genesis', 'Veloster', 'i10', 'i20', 'i30']
  },
  {
    name: 'Kia',
    models: ['Rio', 'Forte', 'K5', 'Stinger', 'Soul', 'Seltos', 'Sportage', 'Sorento', 'Telluride', 'Carnival', 'EV6', 'Niro', 'Cadenza']
  },
  {
    name: 'Nissan',
    models: ['Versa', 'Sentra', 'Altima', 'Maxima', 'Kicks', 'Rogue', 'Murano', 'Pathfinder', 'Armada', 'Frontier', 'Titan', 'Leaf', '370Z', 'GT-R', 'Juke', 'Qashqai', 'X-Trail']
  },
  {
    name: 'Volkswagen',
    models: ['Polo', 'Golf', 'Jetta', 'Passat', 'Arteon', 'T-Roc', 'Tiguan', 'Touareg', 'ID.3', 'ID.4', 'ID.5', 'Atlas', 'Taos', 'Beetle', 'CC']
  },
  {
    name: 'Ford',
    models: ['Fiesta', 'Focus', 'Fusion', 'Mustang', 'EcoSport', 'Escape', 'Edge', 'Explorer', 'Expedition', 'Bronco', 'Ranger', 'F-150', 'Maverick', 'Mach-E']
  },
  {
    name: 'Chevrolet',
    models: ['Spark', 'Sonic', 'Cruze', 'Malibu', 'Camaro', 'Corvette', 'Trax', 'Equinox', 'Blazer', 'Traverse', 'Tahoe', 'Suburban', 'Colorado', 'Silverado', 'Bolt']
  },
  {
    name: 'Lexus',
    models: ['IS', 'ES', 'GS', 'LS', 'RC', 'LC', 'UX', 'NX', 'RX', 'GX', 'LX', 'LM']
  },
  {
    name: 'Porsche',
    models: ['911', '718 Boxster', '718 Cayman', 'Panamera', 'Taycan', 'Macan', 'Cayenne']
  },
  {
    name: 'Land Rover',
    models: ['Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Sport', 'Range Rover Velar', 'Range Rover Evoque']
  },
  {
    name: 'Jaguar',
    models: ['XE', 'XF', 'F-Type', 'E-Pace', 'F-Pace', 'I-Pace']
  },
  {
    name: 'Volvo',
    models: ['S60', 'S90', 'V60', 'V90', 'XC40', 'XC60', 'XC90', 'C40']
  },
  {
    name: 'Mazda',
    models: ['Mazda2', 'Mazda3', 'Mazda6', 'CX-3', 'CX-30', 'CX-5', 'CX-9', 'MX-5', 'MX-30']
  },
  {
    name: 'Subaru',
    models: ['Impreza', 'Legacy', 'Crosstrek', 'Forester', 'Outback', 'Ascent', 'BRZ', 'WRX']
  },
  {
    name: 'Mitsubishi',
    models: ['Mirage', 'Lancer', 'Eclipse Cross', 'Outlander', 'Pajero', 'ASX', 'L200']
  },
  {
    name: 'Infiniti',
    models: ['Q50', 'Q60', 'QX50', 'QX55', 'QX60', 'QX80']
  },
  {
    name: 'Acura',
    models: ['ILX', 'TLX', 'RDX', 'MDX', 'NSX']
  },
  {
    name: 'Genesis',
    models: ['G70', 'G80', 'G90', 'GV70', 'GV80']
  },
  {
    name: 'Tesla',
    models: ['Model 3', 'Model S', 'Model X', 'Model Y', 'Cybertruck']
  },
  {
    name: 'Peugeot',
    models: ['108', '208', '308', '408', '508', '2008', '3008', '5008']
  },
  {
    name: 'Renault',
    models: ['Clio', 'Megane', 'Talisman', 'Captur', 'Kadjar', 'Koleos', 'Duster', 'Arkana']
  },
  {
    name: 'Skoda',
    models: ['Fabia', 'Scala', 'Octavia', 'Superb', 'Kamiq', 'Karoq', 'Kodiaq', 'Enyaq']
  },
  {
    name: 'Seat',
    models: ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco']
  },
  {
    name: 'Opel',
    models: ['Corsa', 'Astra', 'Insignia', 'Crossland', 'Grandland', 'Mokka']
  },
  {
    name: 'Fiat',
    models: ['500', 'Panda', 'Tipo', '500X', '500L', 'Ducato']
  },
  {
    name: 'Alfa Romeo',
    models: ['Giulia', 'Stelvio', 'Tonale', 'Giulietta']
  },
  {
    name: 'Maserati',
    models: ['Ghibli', 'Quattroporte', 'Levante', 'MC20', 'Grecale']
  },
  {
    name: 'Ferrari',
    models: ['Roma', 'Portofino', 'F8 Tributo', 'SF90 Stradale', '296 GTB', '812', 'Purosangue']
  },
  {
    name: 'Lamborghini',
    models: ['Huracán', 'Urus', 'Aventador', 'Revuelto']
  },
  {
    name: 'Bentley',
    models: ['Continental GT', 'Flying Spur', 'Bentayga']
  },
  {
    name: 'Rolls-Royce',
    models: ['Ghost', 'Phantom', 'Wraith', 'Dawn', 'Cullinan', 'Spectre']
  },
  {
    name: 'Aston Martin',
    models: ['Vantage', 'DB11', 'DBS', 'DBX']
  },
  {
    name: 'McLaren',
    models: ['540C', '570S', '600LT', '720S', 'Artura', 'GT']
  },
  {
    name: 'Bugatti',
    models: ['Chiron', 'Veyron', 'Divo', 'Bolide']
  },
  {
    name: 'Lada',
    models: ['Vesta', 'Granta', 'XRAY', 'Largus', 'Niva', '4x4']
  },
  {
    name: 'Geely',
    models: ['Atlas', 'Coolray', 'Tugella', 'Monjaro', 'Emgrand']
  },
  {
    name: 'Chery',
    models: ['Tiggo 2', 'Tiggo 4', 'Tiggo 7', 'Tiggo 8', 'Arrizo 5', 'Arrizo 6']
  },
  {
    name: 'Haval',
    models: ['H2', 'H6', 'H9', 'F7', 'Jolion', 'Dargo']
  },
  {
    name: 'BYD',
    models: ['Tang', 'Han', 'Song', 'Qin', 'Seal', 'Dolphin', 'Atto 3']
  },
  {
    name: 'Great Wall',
    models: ['Wingle', 'Poer', 'Tank 300', 'Tank 500']
  },
  {
    name: 'Daewoo',
    models: ['Gentra', 'Lacetti', 'Matiz', 'Nexia', 'Cobalt', 'Damas']
  },
  {
    name: 'Dodge',
    models: ['Challenger', 'Charger', 'Durango', 'Journey', 'Ram']
  },
  {
    name: 'Jeep',
    models: ['Renegade', 'Compass', 'Cherokee', 'Grand Cherokee', 'Wrangler', 'Gladiator']
  },
  {
    name: 'Chrysler',
    models: ['300', 'Pacifica', 'Voyager']
  },
  {
    name: 'Cadillac',
    models: ['CT4', 'CT5', 'XT4', 'XT5', 'XT6', 'Escalade', 'Lyriq']
  },
  {
    name: 'Lincoln',
    models: ['Corsair', 'Nautilus', 'Aviator', 'Navigator']
  },
  {
    name: 'GMC',
    models: ['Terrain', 'Acadia', 'Yukon', 'Canyon', 'Sierra', 'Hummer EV']
  },
  {
    name: 'Buick',
    models: ['Encore', 'Envision', 'Enclave']
  },
  {
    name: 'Suzuki',
    models: ['Swift', 'Baleno', 'Vitara', 'S-Cross', 'Jimny', 'Ignis']
  },
  {
    name: 'Dacia',
    models: ['Sandero', 'Logan', 'Duster', 'Spring', 'Jogger']
  },
  {
    name: 'Citroën',
    models: ['C3', 'C4', 'C5', 'Berlingo', 'C3 Aircross', 'C5 Aircross']
  },
  {
    name: 'Mini',
    models: ['Cooper', 'Clubman', 'Countryman', 'Convertible']
  },
  {
    name: 'Smart',
    models: ['ForTwo', 'ForFour', '#1']
  }
];

export const getAllMakes = (): string[] => {
  return carBrands.map(brand => brand.name).sort();
};

export const getModelsByMake = (make: string): string[] => {
  const brand = carBrands.find(b => b.name === make);
  return brand ? brand.models.sort() : [];
};
