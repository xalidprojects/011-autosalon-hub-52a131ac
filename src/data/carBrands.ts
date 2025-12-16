export interface CarBrand {
  name: string;
  models: string[];
}

export const carBrands: CarBrand[] = [
  {
    name: 'Audi',
    models: [
      'A1 1.0 TFSI', 'A1 1.4 TFSI', 'A1 Sportback',
      'A3 1.4 TFSI', 'A3 1.8 TFSI', 'A3 2.0 TDI', 'A3 Sportback', 'A3 Sedan',
      'A4 1.8 TFSI', 'A4 2.0 TFSI', 'A4 2.0 TDI', 'A4 3.0 TDI', 'A4 Avant', 'A4 Allroad',
      'A5 2.0 TFSI', 'A5 2.0 TDI', 'A5 3.0 TDI', 'A5 Sportback', 'A5 Coupe', 'A5 Cabriolet',
      'A6 2.0 TFSI', 'A6 2.0 TDI', 'A6 3.0 TFSI', 'A6 3.0 TDI', 'A6 Avant', 'A6 Allroad',
      'A7 3.0 TFSI', 'A7 3.0 TDI', 'A7 Sportback',
      'A8 3.0 TFSI', 'A8 4.0 TFSI', 'A8 3.0 TDI', 'A8 L', 'A8 L 60 TFSI',
      'Q2 1.0 TFSI', 'Q2 1.4 TFSI', 'Q2 2.0 TDI',
      'Q3 1.4 TFSI', 'Q3 2.0 TFSI', 'Q3 2.0 TDI', 'Q3 Sportback',
      'Q5 2.0 TFSI', 'Q5 2.0 TDI', 'Q5 3.0 TDI', 'Q5 Sportback',
      'Q7 3.0 TFSI', 'Q7 3.0 TDI', 'Q7 4.0 TDI', 'Q7 e-tron',
      'Q8 3.0 TFSI', 'Q8 3.0 TDI', 'Q8 e-tron',
      'TT 2.0 TFSI', 'TT 2.0 TDI', 'TT Roadster', 'TTS', 'TT RS',
      'R8 5.2 FSI', 'R8 V10', 'R8 V10 Plus', 'R8 Spyder',
      'e-tron 50', 'e-tron 55', 'e-tron S', 'e-tron GT', 'RS e-tron GT',
      'RS3 2.5 TFSI', 'RS4 2.9 TFSI', 'RS5 2.9 TFSI', 'RS6 4.0 TFSI', 'RS7 4.0 TFSI',
      'S3 2.0 TFSI', 'S4 3.0 TFSI', 'S5 3.0 TFSI', 'S6 4.0 TFSI', 'S7 4.0 TFSI', 'S8 4.0 TFSI',
      'SQ5 3.0 TFSI', 'SQ7 4.0 TDI', 'SQ8 4.0 TDI'
    ]
  },
  {
    name: 'BMW',
    models: [
      '116i', '118i', '118d', '120i', '120d', '125i', 'M135i', 'M140i',
      '218i', '218d', '220i', '220d', '225i', '230i', 'M235i', 'M240i', '218i Gran Coupe',
      '316i', '318i', '318d', '320i', '320d', '325i', '328i', '330i', '330d', '335i', '340i', 'M3',
      '420i', '420d', '425i', '428i', '430i', '430d', '435i', '440i', 'M4', 'M4 Competition',
      '520i', '520d', '523i', '525i', '525d', '528i', '530i', '530d', '535i', '540i', '545i', '550i', 'M5',
      '630i', '630d', '640i', '640d', '650i', 'M6',
      '725d', '730i', '730d', '740i', '740d', '745i', '750i', '750d', '760i', 'M760i',
      '840i', '840d', '850i', 'M8', 'M8 Competition',
      'X1 18i', 'X1 18d', 'X1 20i', 'X1 20d', 'X1 25i', 'X1 25d',
      'X2 18i', 'X2 18d', 'X2 20i', 'X2 20d', 'X2 M35i',
      'X3 20i', 'X3 20d', 'X3 25i', 'X3 30i', 'X3 30d', 'X3 M40i', 'X3 M',
      'X4 20i', 'X4 20d', 'X4 30i', 'X4 30d', 'X4 M40i', 'X4 M',
      'X5 25d', 'X5 30d', 'X5 40i', 'X5 45e', 'X5 50i', 'X5 M50d', 'X5 M',
      'X6 30d', 'X6 40i', 'X6 50i', 'X6 M50d', 'X6 M',
      'X7 30d', 'X7 40i', 'X7 50i', 'X7 M50i',
      'Z4 20i', 'Z4 30i', 'Z4 M40i',
      'i3', 'i3s', 'i4 eDrive40', 'i4 M50', 'iX xDrive40', 'iX xDrive50', 'iX M60'
    ]
  },
  {
    name: 'Mercedes-Benz',
    models: [
      'A 160', 'A 180', 'A 180d', 'A 200', 'A 200d', 'A 220', 'A 250', 'A 35 AMG', 'A 45 AMG',
      'B 160', 'B 180', 'B 180d', 'B 200', 'B 200d', 'B 220',
      'C 160', 'C 180', 'C 180d', 'C 200', 'C 200d', 'C 220d', 'C 250', 'C 300', 'C 43 AMG', 'C 63 AMG',
      'E 180', 'E 200', 'E 200d', 'E 220d', 'E 250', 'E 300', 'E 350', 'E 400', 'E 43 AMG', 'E 53 AMG', 'E 63 AMG',
      'S 320', 'S 350', 'S 350d', 'S 400', 'S 450', 'S 500', 'S 560', 'S 600', 'S 63 AMG', 'S 65 AMG',
      'CLA 180', 'CLA 200', 'CLA 220', 'CLA 250', 'CLA 35 AMG', 'CLA 45 AMG',
      'CLS 350', 'CLS 400', 'CLS 450', 'CLS 500', 'CLS 53 AMG', 'CLS 63 AMG',
      'GLA 180', 'GLA 200', 'GLA 220', 'GLA 250', 'GLA 35 AMG', 'GLA 45 AMG',
      'GLB 180', 'GLB 200', 'GLB 220', 'GLB 250', 'GLB 35 AMG',
      'GLC 200', 'GLC 220d', 'GLC 250', 'GLC 300', 'GLC 350e', 'GLC 43 AMG', 'GLC 63 AMG',
      'GLE 300d', 'GLE 350', 'GLE 350d', 'GLE 400', 'GLE 450', 'GLE 53 AMG', 'GLE 63 AMG',
      'GLS 350d', 'GLS 400', 'GLS 450', 'GLS 500', 'GLS 580', 'GLS 63 AMG',
      'G 350d', 'G 400d', 'G 500', 'G 63 AMG',
      'EQA 250', 'EQA 300', 'EQA 350',
      'EQB 250', 'EQB 300', 'EQB 350',
      'EQC 400',
      'EQE 300', 'EQE 350', 'EQE 43 AMG', 'EQE 53 AMG',
      'EQS 450', 'EQS 500', 'EQS 53 AMG', 'EQS 580',
      'AMG GT', 'AMG GT S', 'AMG GT R', 'AMG GT 63', 'AMG GT 63 S',
      'Maybach S 500', 'Maybach S 560', 'Maybach S 600', 'Maybach S 650', 'Maybach GLS 600'
    ]
  },
  {
    name: 'Toyota',
    models: [
      'Corolla 1.6', 'Corolla 1.8', 'Corolla 2.0', 'Corolla Hybrid', 'Corolla Cross',
      'Camry 2.0', 'Camry 2.5', 'Camry 3.5', 'Camry Hybrid',
      'Avalon 2.5', 'Avalon 3.5', 'Avalon Hybrid',
      'Prius 1.8 Hybrid', 'Prius Prime', 'Prius+',
      'RAV4 2.0', 'RAV4 2.5', 'RAV4 Hybrid', 'RAV4 Prime', 'RAV4 Adventure',
      'Highlander 2.7', 'Highlander 3.5', 'Highlander Hybrid',
      'Land Cruiser 200', 'Land Cruiser 300', 'Land Cruiser Prado 2.7', 'Land Cruiser Prado 4.0',
      'C-HR 1.2 Turbo', 'C-HR 1.8 Hybrid', 'C-HR 2.0 Hybrid',
      'Yaris 1.0', 'Yaris 1.3', 'Yaris 1.5', 'Yaris Hybrid', 'Yaris Cross',
      'Supra 2.0', 'Supra 3.0',
      '4Runner SR5', '4Runner TRD', '4Runner Limited',
      'Sequoia SR5', 'Sequoia TRD', 'Sequoia Limited', 'Sequoia Platinum',
      'Tacoma SR', 'Tacoma SR5', 'Tacoma TRD', 'Tacoma Limited',
      'Tundra SR', 'Tundra SR5', 'Tundra TRD', 'Tundra Limited', 'Tundra 1794',
      'Sienna LE', 'Sienna XLE', 'Sienna Limited', 'Sienna Platinum',
      'Venza LE', 'Venza XLE', 'Venza Limited'
    ]
  },
  {
    name: 'Honda',
    models: [
      'Civic 1.5 Turbo', 'Civic 1.8', 'Civic 2.0', 'Civic Si', 'Civic Type R', 'Civic Hybrid',
      'Accord 1.5 Turbo', 'Accord 2.0 Turbo', 'Accord 2.4', 'Accord Hybrid',
      'CR-V 1.5 Turbo', 'CR-V 2.0', 'CR-V 2.4', 'CR-V Hybrid',
      'HR-V 1.5', 'HR-V 1.8', 'HR-V Turbo',
      'Pilot LX', 'Pilot EX', 'Pilot Touring', 'Pilot Elite',
      'Passport Sport', 'Passport EX-L', 'Passport Touring', 'Passport Elite',
      'Odyssey LX', 'Odyssey EX', 'Odyssey EX-L', 'Odyssey Touring', 'Odyssey Elite',
      'Ridgeline Sport', 'Ridgeline RTL', 'Ridgeline RTL-E', 'Ridgeline Black Edition',
      'Fit LX', 'Fit Sport', 'Fit EX', 'Fit EX-L',
      'Insight LX', 'Insight EX', 'Insight Touring'
    ]
  },
  {
    name: 'Hyundai',
    models: [
      'Accent 1.4', 'Accent 1.6',
      'Elantra 1.6', 'Elantra 2.0', 'Elantra N', 'Elantra Hybrid',
      'Sonata 2.0', 'Sonata 2.4', 'Sonata 2.5', 'Sonata N Line', 'Sonata Hybrid',
      'Azera 2.4', 'Azera 3.0', 'Azera 3.3',
      'Kona 1.6', 'Kona 1.6 Turbo', 'Kona 2.0', 'Kona N', 'Kona Electric',
      'Tucson 1.6', 'Tucson 1.6 Turbo', 'Tucson 2.0', 'Tucson 2.0 Diesel', 'Tucson Hybrid', 'Tucson N Line',
      'Santa Fe 2.0 Turbo', 'Santa Fe 2.2 Diesel', 'Santa Fe 2.5', 'Santa Fe Hybrid', 'Santa Fe Calligraphy',
      'Palisade 3.8', 'Palisade Calligraphy',
      'Venue 1.6',
      'Ioniq Hybrid', 'Ioniq Electric', 'Ioniq 5', 'Ioniq 6',
      'Nexo Hydrogen',
      'Veloster 1.6', 'Veloster Turbo', 'Veloster N',
      'i10 1.0', 'i10 1.2',
      'i20 1.0', 'i20 1.2', 'i20 1.4', 'i20 N',
      'i30 1.4', 'i30 1.6', 'i30 2.0', 'i30 N', 'i30 Fastback'
    ]
  },
  {
    name: 'Kia',
    models: [
      'Rio 1.4', 'Rio 1.6',
      'Forte 1.6', 'Forte 2.0', 'Forte GT',
      'K5 1.6 Turbo', 'K5 2.0', 'K5 2.5', 'K5 GT', 'K5 Hybrid',
      'Stinger 2.0 Turbo', 'Stinger 2.5 Turbo', 'Stinger 3.3 Turbo', 'Stinger GT',
      'Soul 1.6', 'Soul 2.0', 'Soul Turbo', 'Soul EV',
      'Seltos 1.6', 'Seltos 2.0', 'Seltos Turbo',
      'Sportage 1.6', 'Sportage 1.6 Turbo', 'Sportage 2.0', 'Sportage 2.0 Diesel', 'Sportage Hybrid', 'Sportage X-Line',
      'Sorento 2.5', 'Sorento 2.5 Turbo', 'Sorento 2.2 Diesel', 'Sorento Hybrid', 'Sorento X-Line',
      'Telluride LX', 'Telluride S', 'Telluride EX', 'Telluride SX', 'Telluride X-Line',
      'Carnival LX', 'Carnival EX', 'Carnival SX',
      'EV6 Standard', 'EV6 Long Range', 'EV6 GT',
      'Niro Hybrid', 'Niro PHEV', 'Niro EV',
      'Cadenza 2.4', 'Cadenza 3.3'
    ]
  },
  {
    name: 'Nissan',
    models: [
      'Versa 1.6', 'Versa SR',
      'Sentra 2.0', 'Sentra SR',
      'Altima 2.0', 'Altima 2.5', 'Altima SR', 'Altima Platinum',
      'Maxima 3.5', 'Maxima SR', 'Maxima Platinum',
      'Kicks 1.6', 'Kicks SR',
      'Rogue 2.5', 'Rogue SV', 'Rogue SL', 'Rogue Platinum',
      'Murano 3.5', 'Murano SV', 'Murano SL', 'Murano Platinum',
      'Pathfinder 3.5', 'Pathfinder SV', 'Pathfinder SL', 'Pathfinder Platinum',
      'Armada 5.6', 'Armada SV', 'Armada SL', 'Armada Platinum',
      'Frontier 2.5', 'Frontier 3.8', 'Frontier PRO-4X',
      'Titan 5.6', 'Titan XD', 'Titan PRO-4X',
      'Leaf S', 'Leaf SV', 'Leaf SL', 'Leaf Plus',
      '370Z Sport', '370Z Touring', '370Z Nismo',
      'GT-R Pure', 'GT-R Premium', 'GT-R Track', 'GT-R Nismo',
      'Juke 1.0', 'Juke 1.6', 'Juke Nismo',
      'Qashqai 1.3', 'Qashqai 1.5 Diesel', 'Qashqai e-Power',
      'X-Trail 1.3', 'X-Trail 1.5', 'X-Trail 2.0', 'X-Trail e-Power'
    ]
  },
  {
    name: 'Volkswagen',
    models: [
      'Polo 1.0', 'Polo 1.0 TSI', 'Polo 1.5 TSI', 'Polo GTI',
      'Golf 1.0 TSI', 'Golf 1.4 TSI', 'Golf 1.5 TSI', 'Golf 2.0 TSI', 'Golf 2.0 TDI', 'Golf GTI', 'Golf R',
      'Jetta 1.4 TSI', 'Jetta 1.8 TSI', 'Jetta 2.0 TSI', 'Jetta GLI',
      'Passat 1.4 TSI', 'Passat 1.8 TSI', 'Passat 2.0 TSI', 'Passat 2.0 TDI', 'Passat GTE',
      'Arteon 2.0 TSI', 'Arteon 2.0 TDI', 'Arteon R',
      'T-Roc 1.0 TSI', 'T-Roc 1.5 TSI', 'T-Roc 2.0 TSI', 'T-Roc R',
      'Tiguan 1.4 TSI', 'Tiguan 2.0 TSI', 'Tiguan 2.0 TDI', 'Tiguan R',
      'Touareg 3.0 TSI', 'Touareg 3.0 TDI', 'Touareg R', 'Touareg eHybrid',
      'ID.3 Pure', 'ID.3 Pro', 'ID.3 Pro S',
      'ID.4 Pure', 'ID.4 Pro', 'ID.4 GTX',
      'ID.5 Pro', 'ID.5 GTX',
      'Atlas 2.0 TSI', 'Atlas 3.6 V6', 'Atlas Cross Sport',
      'Taos 1.5 TSI',
      'CC 1.8 TSI', 'CC 2.0 TSI', 'CC 3.6 V6'
    ]
  },
  {
    name: 'Ford',
    models: [
      'Fiesta 1.0', 'Fiesta 1.0 EcoBoost', 'Fiesta 1.5', 'Fiesta ST',
      'Focus 1.0 EcoBoost', 'Focus 1.5 EcoBoost', 'Focus 2.0', 'Focus ST', 'Focus RS',
      'Fusion 1.5 EcoBoost', 'Fusion 2.0 EcoBoost', 'Fusion 2.5', 'Fusion Hybrid', 'Fusion Sport',
      'Mustang 2.3 EcoBoost', 'Mustang 5.0 GT', 'Mustang Mach 1', 'Mustang Shelby GT350', 'Mustang Shelby GT500',
      'EcoSport 1.0 EcoBoost', 'EcoSport 1.5', 'EcoSport 2.0',
      'Escape 1.5 EcoBoost', 'Escape 2.0 EcoBoost', 'Escape Hybrid', 'Escape PHEV',
      'Edge 2.0 EcoBoost', 'Edge 2.7 EcoBoost', 'Edge ST',
      'Explorer 2.3 EcoBoost', 'Explorer 3.0 EcoBoost', 'Explorer Hybrid', 'Explorer ST',
      'Expedition 3.5 EcoBoost', 'Expedition Max', 'Expedition Limited', 'Expedition Platinum',
      'Bronco 2.3 EcoBoost', 'Bronco 2.7 EcoBoost', 'Bronco Raptor', 'Bronco Sport',
      'Ranger 2.3 EcoBoost', 'Ranger Raptor',
      'F-150 2.7 EcoBoost', 'F-150 3.5 EcoBoost', 'F-150 5.0 V8', 'F-150 Raptor', 'F-150 Lightning',
      'Maverick 2.0 EcoBoost', 'Maverick Hybrid',
      'Mustang Mach-E Select', 'Mustang Mach-E Premium', 'Mustang Mach-E GT'
    ]
  },
  {
    name: 'Chevrolet',
    models: [
      'Spark LS', 'Spark LT',
      'Sonic LT', 'Sonic Premier',
      'Cruze L', 'Cruze LS', 'Cruze LT', 'Cruze Premier',
      'Malibu L', 'Malibu LS', 'Malibu LT', 'Malibu Premier',
      'Camaro 2.0 Turbo', 'Camaro 3.6 V6', 'Camaro SS', 'Camaro ZL1',
      'Corvette Stingray', 'Corvette Z06', 'Corvette ZR1', 'Corvette E-Ray',
      'Trax LS', 'Trax LT',
      'Equinox L', 'Equinox LS', 'Equinox LT', 'Equinox Premier', 'Equinox RS',
      'Blazer L', 'Blazer LT', 'Blazer RS', 'Blazer Premier', 'Blazer SS',
      'Traverse L', 'Traverse LS', 'Traverse LT', 'Traverse Premier', 'Traverse RS',
      'Tahoe LS', 'Tahoe LT', 'Tahoe Z71', 'Tahoe Premier', 'Tahoe RST',
      'Suburban LS', 'Suburban LT', 'Suburban Z71', 'Suburban Premier', 'Suburban RST',
      'Colorado WT', 'Colorado LT', 'Colorado Z71', 'Colorado ZR2',
      'Silverado WT', 'Silverado LT', 'Silverado LTZ', 'Silverado High Country', 'Silverado ZR2',
      'Bolt EV', 'Bolt EUV'
    ]
  },
  {
    name: 'Lexus',
    models: [
      'IS 200t', 'IS 300', 'IS 350', 'IS 500',
      'ES 250', 'ES 300h', 'ES 350',
      'GS 300', 'GS 350', 'GS F',
      'LS 350', 'LS 500', 'LS 500h',
      'RC 300', 'RC 350', 'RC F',
      'LC 500', 'LC 500h',
      'UX 200', 'UX 250h',
      'NX 250', 'NX 300', 'NX 350', 'NX 350h', 'NX 450h+',
      'RX 300', 'RX 350', 'RX 350h', 'RX 450h', 'RX 500h',
      'GX 460', 'GX 550',
      'LX 570', 'LX 600'
    ]
  },
  {
    name: 'Porsche',
    models: [
      '911 Carrera', '911 Carrera S', '911 Carrera 4', '911 Carrera 4S', '911 Turbo', '911 Turbo S', '911 GT3', '911 GT3 RS',
      '718 Boxster', '718 Boxster S', '718 Boxster GTS', '718 Spyder',
      '718 Cayman', '718 Cayman S', '718 Cayman GTS', '718 Cayman GT4',
      'Panamera', 'Panamera 4', 'Panamera 4S', 'Panamera GTS', 'Panamera Turbo', 'Panamera Turbo S',
      'Taycan', 'Taycan 4S', 'Taycan Turbo', 'Taycan Turbo S', 'Taycan Cross Turismo',
      'Macan', 'Macan S', 'Macan GTS', 'Macan Turbo',
      'Cayenne', 'Cayenne S', 'Cayenne E-Hybrid', 'Cayenne GTS', 'Cayenne Turbo', 'Cayenne Turbo GT'
    ]
  },
  {
    name: 'Land Rover',
    models: [
      'Defender 90', 'Defender 110', 'Defender 130', 'Defender V8',
      'Discovery Sport D165', 'Discovery Sport D200', 'Discovery Sport P250', 'Discovery Sport P300',
      'Discovery D250', 'Discovery D300', 'Discovery P300', 'Discovery P360',
      'Range Rover Evoque D165', 'Range Rover Evoque D200', 'Range Rover Evoque P250', 'Range Rover Evoque P300',
      'Range Rover Velar D200', 'Range Rover Velar D300', 'Range Rover Velar P250', 'Range Rover Velar P400',
      'Range Rover Sport D250', 'Range Rover Sport D300', 'Range Rover Sport P360', 'Range Rover Sport P400', 'Range Rover Sport P530', 'Range Rover Sport SVR',
      'Range Rover D250', 'Range Rover D300', 'Range Rover D350', 'Range Rover P400', 'Range Rover P530', 'Range Rover SV'
    ]
  },
  {
    name: 'Jaguar',
    models: [
      'XE P250', 'XE P300', 'XE S',
      'XF P250', 'XF P300', 'XF P300 AWD', 'XF S',
      'F-Type P300', 'F-Type P380', 'F-Type P450', 'F-Type R',
      'E-Pace P250', 'E-Pace P300',
      'F-Pace P250', 'F-Pace P340', 'F-Pace P400', 'F-Pace SVR',
      'I-Pace EV320', 'I-Pace EV400'
    ]
  },
  {
    name: 'Volvo',
    models: [
      'S60 T4', 'S60 T5', 'S60 T6', 'S60 T8', 'S60 Recharge',
      'S90 T5', 'S90 T6', 'S90 T8', 'S90 Recharge',
      'V60 T5', 'V60 T6', 'V60 T8', 'V60 Cross Country',
      'V90 T5', 'V90 T6', 'V90 T8', 'V90 Cross Country',
      'XC40 T3', 'XC40 T4', 'XC40 T5', 'XC40 Recharge',
      'XC60 T5', 'XC60 T6', 'XC60 T8', 'XC60 Recharge',
      'XC90 T5', 'XC90 T6', 'XC90 T8', 'XC90 Recharge',
      'C40 Recharge'
    ]
  },
  {
    name: 'Mazda',
    models: [
      'Mazda2 1.5',
      'Mazda3 1.5', 'Mazda3 2.0', 'Mazda3 2.5', 'Mazda3 Turbo',
      'Mazda6 2.0', 'Mazda6 2.5', 'Mazda6 2.5 Turbo',
      'CX-3 1.5', 'CX-3 2.0',
      'CX-30 2.0', 'CX-30 2.5', 'CX-30 Turbo',
      'CX-5 2.0', 'CX-5 2.5', 'CX-5 2.5 Turbo',
      'CX-9 2.5 Turbo',
      'MX-5 1.5', 'MX-5 2.0', 'MX-5 RF',
      'MX-30 EV'
    ]
  },
  {
    name: 'Subaru',
    models: [
      'Impreza 2.0', 'Impreza Sport',
      'Legacy 2.4', 'Legacy 2.5', 'Legacy XT',
      'Crosstrek 2.0', 'Crosstrek Sport', 'Crosstrek Limited',
      'Forester 2.5', 'Forester Sport', 'Forester Touring', 'Forester Wilderness',
      'Outback 2.5', 'Outback XT', 'Outback Touring', 'Outback Wilderness',
      'Ascent 2.4 Turbo', 'Ascent Limited', 'Ascent Touring',
      'BRZ', 'BRZ Limited',
      'WRX', 'WRX Premium', 'WRX Limited', 'WRX STI'
    ]
  },
  {
    name: 'Mitsubishi',
    models: [
      'Mirage ES', 'Mirage LE', 'Mirage G4',
      'Lancer ES', 'Lancer SE', 'Lancer GT', 'Lancer Evolution',
      'Eclipse Cross ES', 'Eclipse Cross SE', 'Eclipse Cross SEL',
      'Outlander ES', 'Outlander SE', 'Outlander SEL', 'Outlander PHEV',
      'Pajero 3.0', 'Pajero 3.5', 'Pajero 3.2 Diesel', 'Pajero Sport',
      'ASX 1.6', 'ASX 2.0',
      'L200 2.4', 'L200 Triton'
    ]
  },
  {
    name: 'Infiniti',
    models: [
      'Q50 2.0t', 'Q50 3.0t', 'Q50 Red Sport 400',
      'Q60 2.0t', 'Q60 3.0t', 'Q60 Red Sport 400',
      'QX50 2.0t',
      'QX55 2.0t',
      'QX60 3.5', 'QX60 Pure', 'QX60 Luxe', 'QX60 Autograph',
      'QX80 5.6', 'QX80 Luxe', 'QX80 Premium'
    ]
  },
  {
    name: 'Genesis',
    models: [
      'G70 2.0T', 'G70 3.3T',
      'G80 2.5T', 'G80 3.5T', 'G80 Electrified',
      'G90 3.5T', 'G90 3.3T',
      'GV70 2.5T', 'GV70 3.5T', 'GV70 Electrified',
      'GV80 2.5T', 'GV80 3.5T', 'GV80 3.0 Diesel'
    ]
  },
  {
    name: 'Tesla',
    models: [
      'Model 3 Standard Range', 'Model 3 Long Range', 'Model 3 Performance',
      'Model S Standard Range', 'Model S Long Range', 'Model S Plaid',
      'Model X Standard Range', 'Model X Long Range', 'Model X Plaid',
      'Model Y Standard Range', 'Model Y Long Range', 'Model Y Performance',
      'Cybertruck Single Motor', 'Cybertruck Dual Motor', 'Cybertruck Tri Motor'
    ]
  },
  {
    name: 'Peugeot',
    models: [
      '108 1.0',
      '208 1.2', '208 1.5 Diesel', '208 GT', 'e-208',
      '308 1.2 Turbo', '308 1.5 Diesel', '308 GT', '308 SW',
      '408 1.2 Turbo', '408 PHEV',
      '508 1.6 Turbo', '508 2.0 Diesel', '508 GT', '508 PHEV', '508 SW',
      '2008 1.2 Turbo', '2008 1.5 Diesel', 'e-2008',
      '3008 1.2 Turbo', '3008 1.5 Diesel', '3008 PHEV',
      '5008 1.2 Turbo', '5008 1.5 Diesel', '5008 2.0 Diesel'
    ]
  },
  {
    name: 'Renault',
    models: [
      'Clio 1.0', 'Clio 1.0 TCe', 'Clio 1.3 TCe', 'Clio RS',
      'Megane 1.3 TCe', 'Megane 1.5 dCi', 'Megane RS',
      'Talisman 1.3 TCe', 'Talisman 1.5 dCi', 'Talisman 2.0 dCi',
      'Captur 1.0 TCe', 'Captur 1.3 TCe', 'Captur 1.5 dCi', 'Captur E-Tech',
      'Kadjar 1.3 TCe', 'Kadjar 1.5 dCi',
      'Koleos 2.0 dCi', 'Koleos 2.5',
      'Duster 1.0 TCe', 'Duster 1.3 TCe', 'Duster 1.5 dCi',
      'Arkana 1.3 TCe', 'Arkana E-Tech'
    ]
  },
  {
    name: 'Skoda',
    models: [
      'Fabia 1.0 TSI', 'Fabia 1.5 TSI', 'Fabia Monte Carlo',
      'Scala 1.0 TSI', 'Scala 1.5 TSI', 'Scala Monte Carlo',
      'Octavia 1.0 TSI', 'Octavia 1.5 TSI', 'Octavia 2.0 TSI', 'Octavia 2.0 TDI', 'Octavia RS',
      'Superb 1.5 TSI', 'Superb 2.0 TSI', 'Superb 2.0 TDI', 'Superb iV',
      'Kamiq 1.0 TSI', 'Kamiq 1.5 TSI',
      'Karoq 1.0 TSI', 'Karoq 1.5 TSI', 'Karoq 2.0 TDI',
      'Kodiaq 1.5 TSI', 'Kodiaq 2.0 TSI', 'Kodiaq 2.0 TDI', 'Kodiaq RS',
      'Enyaq iV 50', 'Enyaq iV 60', 'Enyaq iV 80', 'Enyaq RS'
    ]
  },
  {
    name: 'Lada',
    models: [
      'Vesta 1.6', 'Vesta 1.8', 'Vesta SW', 'Vesta SW Cross', 'Vesta Sport',
      'Granta 1.6', 'Granta Liftback', 'Granta Cross',
      'XRAY 1.6', 'XRAY 1.8', 'XRAY Cross',
      'Largus 1.6', 'Largus Cross',
      'Niva 1.7', 'Niva Legend', 'Niva Travel',
      '4x4 Urban', '4x4 Bronto'
    ]
  },
  {
    name: 'Geely',
    models: [
      'Atlas 2.0', 'Atlas 2.4', 'Atlas Pro',
      'Coolray 1.5 Turbo', 'Coolray Sport',
      'Tugella 2.0 Turbo',
      'Monjaro 2.0 Turbo',
      'Emgrand 1.5', 'Emgrand 1.8'
    ]
  },
  {
    name: 'Chery',
    models: [
      'Tiggo 2 1.5',
      'Tiggo 4 1.5 Turbo', 'Tiggo 4 Pro',
      'Tiggo 7 1.5 Turbo', 'Tiggo 7 Pro', 'Tiggo 7 Pro Max',
      'Tiggo 8 1.6 Turbo', 'Tiggo 8 2.0 Turbo', 'Tiggo 8 Pro', 'Tiggo 8 Pro Max',
      'Arrizo 5 1.5 Turbo', 'Arrizo 5 Plus',
      'Arrizo 6 1.5 Turbo', 'Arrizo 6 Pro'
    ]
  },
  {
    name: 'Haval',
    models: [
      'H2 1.5 Turbo',
      'H6 1.5 Turbo', 'H6 2.0 Turbo', 'H6 GT', 'H6 HEV',
      'H9 2.0 Turbo',
      'F7 1.5 Turbo', 'F7 2.0 Turbo', 'F7x',
      'Jolion 1.5 Turbo', 'Jolion HEV',
      'Dargo 2.0 Turbo'
    ]
  },
  {
    name: 'BYD',
    models: [
      'Tang DM-i', 'Tang EV',
      'Han DM-i', 'Han EV',
      'Song Plus DM-i', 'Song Plus EV', 'Song Pro',
      'Qin Plus DM-i', 'Qin Plus EV',
      'Seal',
      'Dolphin',
      'Atto 3'
    ]
  },
  {
    name: 'Daewoo',
    models: [
      'Gentra 1.5',
      'Lacetti 1.4', 'Lacetti 1.6', 'Lacetti Premiere',
      'Matiz 0.8', 'Matiz 1.0',
      'Nexia 1.5', 'Nexia 1.6',
      'Cobalt 1.5',
      'Damas'
    ]
  },
  {
    name: 'Jeep',
    models: [
      'Renegade 1.3 Turbo', 'Renegade 1.6 Diesel', 'Renegade Trailhawk',
      'Compass 1.3 Turbo', 'Compass 2.4', 'Compass Trailhawk',
      'Cherokee 2.4', 'Cherokee 3.2', 'Cherokee Trailhawk',
      'Grand Cherokee 3.6', 'Grand Cherokee 5.7', 'Grand Cherokee 6.4 SRT', 'Grand Cherokee 4xe', 'Grand Cherokee L',
      'Wrangler Sport', 'Wrangler Sahara', 'Wrangler Rubicon', 'Wrangler 4xe',
      'Gladiator Sport', 'Gladiator Overland', 'Gladiator Rubicon'
    ]
  },
  {
    name: 'Ferrari',
    models: [
      'Roma',
      'Portofino M',
      'F8 Tributo', 'F8 Spider',
      'SF90 Stradale', 'SF90 Spider',
      '296 GTB', '296 GTS',
      '812 Superfast', '812 GTS', '812 Competizione',
      'Purosangue'
    ]
  },
  {
    name: 'Lamborghini',
    models: [
      'Huracán EVO', 'Huracán STO', 'Huracán Tecnica', 'Huracán Sterrato',
      'Urus', 'Urus S', 'Urus Performante',
      'Revuelto'
    ]
  },
  {
    name: 'Bentley',
    models: [
      'Continental GT V8', 'Continental GT Speed', 'Continental GT Mulliner',
      'Continental GTC V8', 'Continental GTC Speed',
      'Flying Spur V8', 'Flying Spur W12', 'Flying Spur Hybrid',
      'Bentayga V8', 'Bentayga S', 'Bentayga EWB'
    ]
  },
  {
    name: 'Rolls-Royce',
    models: [
      'Ghost', 'Ghost Extended', 'Ghost Black Badge',
      'Phantom', 'Phantom Extended',
      'Wraith', 'Wraith Black Badge',
      'Dawn', 'Dawn Black Badge',
      'Cullinan', 'Cullinan Black Badge',
      'Spectre'
    ]
  },
  {
    name: 'Maserati',
    models: [
      'Ghibli', 'Ghibli S', 'Ghibli Trofeo',
      'Quattroporte', 'Quattroporte S', 'Quattroporte Trofeo',
      'Levante', 'Levante S', 'Levante GTS', 'Levante Trofeo',
      'MC20', 'MC20 Cielo',
      'Grecale', 'Grecale GT', 'Grecale Trofeo'
    ]
  }
];

export const getAllMakes = (): string[] => {
  return carBrands.map(brand => brand.name).sort();
};

export const getModelsByMake = (make: string): string[] => {
  const brand = carBrands.find(b => b.name === make);
  return brand ? brand.models.sort() : [];
};
