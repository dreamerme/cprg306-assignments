'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-3 p-2 bg-white rounded-lg shadow-md max-h-10 mt-4">
      <span className="text-lg font-medium text-black">{quantity}</span>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className={`w-8 h-8 flex items-center justify-center rounded-full border ${quantity === 1 ? 'bg-gray-300 text-white cursor-not-allowed' : 'bg-gray-500 hover:bg-gray-600 text-white'}`}
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className={`w-8 h-8 flex items-center justify-center rounded-full border ${quantity === 20 ? 'bg-blue-300 text-white cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
      >
        +
      </button>
    </div>
  );
}
