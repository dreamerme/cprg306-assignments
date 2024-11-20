"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('Produce');
    const [name, setName] = useState('');

    const categories = ['Produce', 'Dairy', 'Bakery', 'Meat', 'Frozen Foods', 'Canned Goods', 'Dry Goods', 'Beverages', 'Snacks', 'Household', 'Other'];

    function generateRandomString(length = 8) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }

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

    const handleSubmit = (event) => {
        event.preventDefault();

        const item = {
            id: generateRandomString(8),  // This is to Generate an ID
            name,
            quantity,
            category
        };
        onAddItem(item);

        setName('');
        setQuantity(1);
        setCategory('Produce');
    };

    return (
        <div className="max-w-2xl p-4 bg-gray-600 rounded-lg shadow-lg space-y-4">
            <input
                type="text"
                placeholder="Item name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full px-4 py-2 text-gray-900 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        
            <div className="flex items-center justify-between space-x-12">
  
                <div className="flex items-center bg-white rounded-lg px-2 space-x-2 py-2">
                    <span className="w-1/2 px-4 text-lg">{quantity}</span>
                    <button
                        onClick={decrement}
                        disabled={quantity === 1}
                        className="w-1/4 text-xl px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600 rounded-md"
                    >
                        -
                    </button>                 
                    <button
                        onClick={increment}
                        disabled={quantity === 20}
                        className="w-1/4 text-xl px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600 rounded-md"
                    >
                        +
                    </button>
                </div>
        
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="w-32 px-2 py-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-white"
                >
                    {categories.map((category) => (
                        <option
                            key={`${category.toLowerCase().replace(' ', '-')}-category`}
                            value={category}
                        >
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                onClick={handleSubmit}
                className="w-full px-4 py-2 text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-700"
            >
                +
            </button>
        </div>
    );
}