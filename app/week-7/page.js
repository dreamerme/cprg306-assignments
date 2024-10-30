"use client"; 
import React, { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json"; 

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main className="p-6 min-h-screen bg-gray-800">
            <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
            <section className="flex flex-col items-start">
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
            </section>
        </main>
    );
}