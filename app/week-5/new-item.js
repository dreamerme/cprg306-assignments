"use client";

import { useState } from "react";

const NewItem = () => {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const increment = (e) => {
        e.preventDefault();
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = {
            name,
            quantity,
            category,
        };
        console.log(item);
        alert(
            `Added item: ${item.name}, quantity: ${item.quantity}, category: ${item.category}`
        );
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    const categoryOptions = [
        { key: "produce", label: "Produce" },
        { key: "dairy", label: "Dairy" },
        { key: "bakery", label: "Bakery" },
        { key: "meat", label: "Meat" },
        { key: "frozen foods", label: "Frozen Foods" },
        { key: "canned goods", label: "Canned Goods" },
        { key: "dry goods", label: "Dry Goods" },
        { key: "beverages", label: "Beverages" },
        { key: "snacks", label: "Snacks" },
        { key: "household", label: "Household" },
        { key: "other", label: "Other" },
    ];

    return (
        <div className='flex flex-col gap-7 items-center bg-gray-900'>
            <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 items-start bg-gray-800 border-2 border-gray-700 p-5 rounded w-96'
            >
                <div className='flex flex-col gap-2 w-full'>
                    <input
                        type='text'
                        name='item-name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Item name'
                        className='w-full h-12 text-lg p-3 text-gray-900 bg-gray-100 border-none rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        required
                    />
                </div>

                <div className='flex gap-4 items-center w-full bg-white justify-between'>  
                      <div className='flex gap-3 items-center'>
                          <span className="text-lg font-medium text-black">{quantity}</span>
                          <button
                              onClick={decrement}
                              disabled={quantity === 1}
                              className='w-10 h-7 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500'
                              type='button'
                          >
                              -
                          </button>
                          <button
                              onClick={increment}
                              className='w-10 h-7 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all disabled:bg-gray-500 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-500'
                              disabled={quantity === 20}
                              type='button'
                          >
                              +
                          </button>
                      </div>
                      <select
                          name='category'
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className='h-12 text-lg p-3 bg-gray-100 border-none rounded text-gray-900 w-44 focus:outline-none focus:ring-2 focus:ring-blue-500'
                          required
                      >
                          {categoryOptions.map((option) => (
                              <option key={option.key} value={option.key}>
                                  {option.label}
                              </option>
                          ))}
                      </select>
                </div>

                <button className='w-full h-12 flex items-center justify-center bg-blue-500 text-white rounded font-bold text-lg transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
                    +
                </button>
            </form>
        </div>
    );
};

export default NewItem;
