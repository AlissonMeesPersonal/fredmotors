import Link from "next/link";
import { ArrowUpRight, Gauge, CalendarDays } from "lucide-react";
import { Vehicle, formatCurrency, formatMileage } from "@/lib/vehicles";

export default function VehicleCard({ vehicle, index = 0 }: { vehicle: Vehicle; index?: number }) {
  return (
    <Link href={"/veiculos/" + vehicle.slug} className="vehicle-card">
      <div className="vehicle-image-wrap">
        <div className="vehicle-image" style={{ backgroundImage: 'url("' + vehicle.image + '")' }} role="img" aria-label={vehicle.imageAlt} />
        <span className="vehicle-image-label">Imagem ilustrativa</span>
        <span className="vehicle-number">{String(index + 1).padStart(2, "0")} / SELECTED</span>
        <span className="vehicle-image-arrow"><ArrowUpRight size={20}/></span>
      </div>
      <div className="vehicle-card-info">
        <div className="vehicle-card-head">
          <div>
            <p className="eyebrow vehicle-brand">{vehicle.brand}</p>
            <h3>{vehicle.model}</h3>
            <p className="vehicle-version">{vehicle.version}</p>
          </div>
          <p className="vehicle-price">{formatCurrency(vehicle.price)}</p>
        </div>
        <div className="vehicle-card-foot">
          <span><CalendarDays size={15}/>{vehicle.year}</span>
          <span><Gauge size={15}/>{formatMileage(vehicle.mileage)}</span>
          <span className="vehicle-category">{vehicle.category}</span>
        </div>
      </div>
    </Link>
  );
}