/**
 * Mock motorcycle data for the showcase component
 */

export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  engineSize: string;
  power: string;
  weight: string;
  seatHeight: string;
  image: string;
  description: string;
  rating: number;
  beginner: boolean;
}

export const motorcycles: Motorcycle[] = [
  {
    id: "honda-cb500f",
    name: "CB500F",
    brand: "Honda",
    category: "naked",
    price: "$6,799",
    engineSize: "471cc Parallel Twin",
    power: "47 hp",
    weight: "416 lbs",
    seatHeight: "30.9 inches",
    image: "/images/motorcycles/honda-cb500f.jpg",
    description: "The Honda CB500F is a versatile naked bike that's perfect for both beginners and experienced riders. With its comfortable upright riding position, responsive handling, and reliable parallel-twin engine, it's an excellent choice for daily commuting and weekend fun.",
    rating: 4.5,
    beginner: true
  },
  {
    id: "kawasaki-ninja-400",
    name: "Ninja 400",
    brand: "Kawasaki",
    category: "sport",
    price: "$5,299",
    engineSize: "399cc Parallel Twin",
    power: "49 hp",
    weight: "366 lbs",
    seatHeight: "30.9 inches",
    image: "/images/motorcycles/kawasaki-ninja-400.jpg",
    description: "The Kawasaki Ninja 400 offers the styling and performance of a true sport bike with a manageable power delivery that's perfect for new riders. Its lightweight chassis and responsive engine make it a favorite for both beginners and experienced riders looking for a fun, nimble motorcycle.",
    rating: 4.7,
    beginner: true
  },
  {
    id: "yamaha-mt07",
    name: "MT-07",
    brand: "Yamaha",
    category: "naked",
    price: "$7,899",
    engineSize: "689cc Parallel Twin",
    power: "74 hp",
    weight: "406 lbs",
    seatHeight: "31.7 inches",
    image: "/images/motorcycles/yamaha-mt07.jpg",
    description: "The Yamaha MT-07 is known for its torquey 'crossplane' engine, lightweight chassis, and aggressive styling. While it's more powerful than typical beginner bikes, its predictable power delivery and excellent handling make it suitable for intermediate riders or ambitious beginners with some experience.",
    rating: 4.8,
    beginner: false
  },
  {
    id: "honda-rebel-500",
    name: "Rebel 500",
    brand: "Honda",
    category: "cruiser",
    price: "$6,299",
    engineSize: "471cc Parallel Twin",
    power: "46 hp",
    weight: "408 lbs",
    seatHeight: "27.2 inches",
    image: "/images/motorcycles/honda-rebel-500.jpg",
    description: "The Honda Rebel 500 reimagines what a beginner cruiser can be with its modern styling and comfortable, low-slung riding position. The extremely low seat height makes it accessible to riders of all sizes, while the smooth power delivery is perfect for building confidence.",
    rating: 4.6,
    beginner: true
  },
  {
    id: "kawasaki-z400",
    name: "Z400",
    brand: "Kawasaki",
    category: "naked",
    price: "$5,099",
    engineSize: "399cc Parallel Twin",
    power: "49 hp",
    weight: "364 lbs",
    seatHeight: "30.9 inches",
    image: "/images/motorcycles/kawasaki-z400.jpg",
    description: "The Kawasaki Z400 takes the excellent engine and chassis from the Ninja 400 and packages it in a more upright, naked bike styling. It's an excellent urban commuter with enough performance for exciting weekend rides, all while being approachable for new riders.",
    rating: 4.5,
    beginner: true
  },
  {
    id: "triumph-street-triple",
    name: "Street Triple R",
    brand: "Triumph",
    category: "naked",
    price: "$11,295",
    engineSize: "765cc Triple",
    power: "118 hp",
    weight: "417 lbs",
    seatHeight: "32.5 inches",
    image: "/images/motorcycles/triumph-street-triple.jpg",
    description: "The Triumph Street Triple R combines British engineering with a distinctive three-cylinder engine that delivers a unique character and sound. With premium components and sophisticated electronics, it's a step up from entry-level motorcycles, ideal for experienced riders seeking performance and refinement.",
    rating: 4.9,
    beginner: false
  },
  {
    id: "kawasaki-versys-650",
    name: "Versys 650",
    brand: "Kawasaki",
    category: "adventure",
    price: "$8,899",
    engineSize: "649cc Parallel Twin",
    power: "66 hp",
    weight: "476 lbs",
    seatHeight: "33.1 inches",
    image: "/images/motorcycles/kawasaki-versys-650.jpg",
    description: "The Kawasaki Versys 650 is a versatile adventure-styled motorcycle that excels at everything from daily commuting to light touring. Its upright riding position, adjustable windscreen, and comfortable ergonomics make it ideal for riders who want one motorcycle that can do it all.",
    rating: 4.6,
    beginner: false
  },
  {
    id: "bmw-r-ninet",
    name: "R nineT",
    brand: "BMW",
    category: "retro",
    price: "$15,945",
    engineSize: "1170cc Boxer Twin",
    power: "109 hp",
    weight: "487 lbs",
    seatHeight: "31.7 inches",
    image: "/images/motorcycles/bmw-r-ninet.jpg",
    description: "The BMW R nineT combines classic styling with modern performance and reliability. Its air-cooled boxer engine delivers character and torque, while premium suspension and brakes provide a refined riding experience. This is a premium option for experienced riders who appreciate heritage and craftsmanship.",
    rating: 4.8,
    beginner: false
  }
];