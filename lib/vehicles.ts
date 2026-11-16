export type Vehicle = {
  slug: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  mileage: number;
  price: number;
  category: "SUV" | "Sedã" | "Picape" | "Off-road";
  fuel: string;
  transmission: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  highlight?: string;
};

export const instagramUrl = "https://www.instagram.com/fredmotorss/";
export const whatsappNumber = "5551998631212";
export const dealershipAddress = "Rua São José, 1302 · Bairro Goiás · Santa Cruz do Sul/RS";
export const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Rua+Sao+Jose+1302+Santa+Cruz+do+Sul+RS";

export function whatsappUrl(subject?: string) {
  const message = subject
    ? "Olá, Fred Motors! Gostaria de saber mais sobre o veículo " + subject + "."
    : "Olá, Fred Motors! Gostaria de conversar com um consultor sobre os veículos disponíveis.";
  return "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);
}

export const vehicles: Vehicle[] = [
  {
    slug: "bmw-745le-m-sport-2021",
    brand: "BMW", model: "745Le", version: "3.0 M Sport · Híbrido",
    year: 2021, mileage: 31000, price: 460000, category: "Sedã",
    fuel: "Híbrido", transmission: "Automático",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1300&q=85",
    imageAlt: "Automóvel BMW em fotografia editorial ilustrativa",
    featured: true, highlight: "Elegância em cada detalhe"
  },
  {
    slug: "bmw-x3-m40i-2024",
    brand: "BMW", model: "X3 M40i", version: "3.0 Turbo · M Performance",
    year: 2024, mileage: 50000, price: 339000, category: "SUV",
    fuel: "Gasolina", transmission: "Automático",
    image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1300&q=85",
    imageAlt: "Automóvel BMW em fotografia editorial ilustrativa",
    featured: true, highlight: "Performance sem concessões"
  },
  {
    slug: "volvo-xc60-t8-2023",
    brand: "VOLVO", model: "XC60 T8", version: "Ultimate Dark · AWD · Híbrido",
    year: 2023, mileage: 49000, price: 285000, category: "SUV",
    fuel: "Híbrido", transmission: "Automático",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1300&q=85",
    imageAlt: "SUV de luxo em fotografia editorial ilustrativa",
    featured: true, highlight: "Sofisticação escandinava"
  },
  {
    slug: "jeep-wrangler-sahara-2022",
    brand: "JEEP", model: "Wrangler", version: "Unlimited Sahara · 4x4",
    year: 2022, mileage: 48000, price: 340000, category: "Off-road",
    fuel: "Gasolina", transmission: "Automático",
    image: "https://images.unsplash.com/photo-1622766252242-b0b7437e4445?auto=format&fit=crop&w=1300&q=85",
    imageAlt: "Jeep Wrangler em fotografia editorial ilustrativa",
    highlight: "Liberdade em outro nível"
  },
  {
    slug: "volkswagen-tiguan-rline-2026",
    brand: "VOLKSWAGEN", model: "Tiguan R-Line", version: "2.0 TSI · 350",
    year: 2026, mileage: 3000, price: 315000, category: "SUV",
    fuel: "Gasolina", transmission: "Automático",
    image: "https://images.unsplash.com/photo-1600705722908-72bfa6637475?auto=format&fit=crop&w=1300&q=85",
    imageAlt: "SUV premium em fotografia editorial ilustrativa"
  },
  {
    slug: "amarok-v6-extreme-2024",
    brand: "VOLKSWAGEN", model: "Amarok V6", version: "Extreme · 3.0 Diesel · 4x4",
    year: 2024, mileage: 77000, price: 249000, category: "Picape",
    fuel: "Diesel", transmission: "Automático",
    image: "https://images.unsplash.com/photo-1597404294360-feeeda04612e?auto=format&fit=crop&w=1300&q=85",
    imageAlt: "Picape em fotografia editorial ilustrativa"
  }
];

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

export const formatMileage = (value: number) =>
  new Intl.NumberFormat("pt-BR").format(value) + " km";

export function findVehicle(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}