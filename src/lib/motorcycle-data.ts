export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  image: string;
  category: string;
  displacement: number;
  price: number;
  power: number;
  weight: number;
  description: string;
  rating: number;
  beginner_friendly: boolean;
  year: number;
}

export const motorcycles: Motorcycle[] = [
  {
    id: "1",
    name: "Ninja 400",
    brand: "Kawasaki",
    image: "/images/motorcycles/kawasaki-ninja-400.jpg",
    category: "Sport",
    displacement: 399,
    price: 5299,
    power: 49,
    weight: 366,
    description: "A lightweight sport bike perfect for beginners and experienced riders alike. The Ninja 400 offers excellent handling and enough power for both city commuting and weekend fun.",
    rating: 4.7,
    beginner_friendly: true,
    year: 2025
  },
  {
    id: "2",
    name: "MT-07",
    brand: "Yamaha",
    image: "/images/motorcycles/yamaha-mt07.jpg",
    category: "Naked",
    displacement: 689,
    price: 7899,
    power: 73,
    weight: 406,
    description: "The MT-07 is a versatile naked bike with a torquey parallel-twin engine. It offers excellent value with its thrilling performance and agile handling.",
    rating: 4.8,
    beginner_friendly: false,
    year: 2025
  },
  {
    id: "3",
    name: "Street Triple R",
    brand: "Triumph",
    image: "/images/motorcycles/triumph-street-triple.jpg",
    category: "Naked",
    displacement: 765,
    price: 10999,
    power: 118,
    weight: 417,
    description: "The Street Triple R combines British engineering with a responsive inline-three engine. It's known for its distinctive sound and precise handling.",
    rating: 4.9,
    beginner_friendly: false,
    year: 2025
  },
  {
    id: "4",
    name: "Rebel 500",
    brand: "Honda",
    image: "/images/motorcycles/honda-rebel-500.jpg",
    category: "Cruiser",
    displacement: 471,
    price: 6299,
    power: 46,
    weight: 408,
    description: "The Rebel 500 is a modern cruiser with classic styling. Its low seat height and manageable power make it an excellent choice for new riders interested in the cruiser style.",
    rating: 4.5,
    beginner_friendly: true,
    year: 2025
  },
  {
    id: "5",
    name: "R nineT",
    brand: "BMW",
    image: "/images/motorcycles/bmw-r-ninet.jpg",
    category: "Retro",
    displacement: 1170,
    price: 15995,
    power: 109,
    weight: 487,
    description: "The R nineT combines vintage aesthetics with modern technology. Its boxer engine provides a unique character and the bike is highly customizable.",
    rating: 4.6,
    beginner_friendly: false,
    year: 2025
  },
  {
    id: "6",
    name: "Versys 650",
    brand: "Kawasaki",
    image: "/images/motorcycles/kawasaki-versys-650.jpg",
    category: "Adventure",
    displacement: 649,
    price: 8999,
    power: 66,
    weight: 476,
    description: "The Versys 650 is a versatile adventure-style bike that's equally at home on city streets and winding country roads. It offers a comfortable upright riding position and enough power for highway touring.",
    rating: 4.4,
    beginner_friendly: false,
    year: 2025
  },
  {
    id: "7",
    name: "Z400",
    brand: "Kawasaki",
    image: "/images/motorcycles/kawasaki-z400.jpg",
    category: "Naked",
    displacement: 399,
    price: 4999,
    power: 49,
    weight: 363,
    description: "The Z400 is the naked version of the Ninja 400, offering the same reliable performance with an upright riding position and aggressive streetfighter styling.",
    rating: 4.5,
    beginner_friendly: true,
    year: 2025
  },
  {
    id: "8",
    name: "CB500F",
    brand: "Honda",
    image: "/images/motorcycles/honda-cb500f.jpg",
    category: "Naked",
    displacement: 471,
    price: 6699,
    power: 47,
    weight: 417,
    description: "The CB500F is a reliable, fuel-efficient naked bike that's perfect for both commuting and weekend rides. Honda's legendary reliability makes this a practical choice.",
    rating: 4.3,
    beginner_friendly: true,
    year: 2025
  }
];
