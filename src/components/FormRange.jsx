import { formatPrice } from "../uitls";
import { useState } from "react";
function FormRange({ name, label, size }) {
  const step = 1000;
  const maxPrice = 100000;
  const [selectedPrice, setselectedPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label className="label cursor-pointer" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
        <span>{formatPrice(selectedPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setselectedPrice(e.target.value)}
        className={`range range-success ${size}`}
        step={step}
      />
      <div className="flex w-full justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">max:{formatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}

export default FormRange;
