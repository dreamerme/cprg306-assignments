"use client"; 
import React, { useState } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import itemsData from "./items.json"; 
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        console.log("Selected item:", itemName.name);
        const cleanedItemName = itemName.name
            .split(",")[0]  // Remove anything after a comma
            .replace(/[^\w\s]/gu, "")  // Remove emojis and special characters
            .trim();
        console.log("Cleaned item name:", cleanedItemName);
        setSelectedItemName(cleanedItemName);
    };

    const { user } = useUserAuth();
    if (!user) {
      return (
        <div>
          <p>Your need to be signed in to view this page.</p>
        </div>
      );
    } else {
        return (
            <main className="p-6 min-h-screen bg-gray-800">
                <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
                <section className="flex flex-row items-start">
                    <div className="w-1/2">
                        <NewItem onAddItem={handleAddItem} />
                        <ItemList items={items} onItemSelect={handleItemSelect} />
                    </div>
                    <div className="w-1/2">
                        <MealIdeas ingredient={selectedItemName} /> 
                    </div>
                </section>
            </main>
        );
    }
}