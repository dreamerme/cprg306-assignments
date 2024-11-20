"use client"; 
import React, { useState, useEffect } from "react";
import NewItem from "./new-item.js";
import ItemList from "./item-list.js";
import MealIdeas from "./meal-ideas.js";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem, deleteItem } from "../_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");
    const { user } = useUserAuth();

    const loadItems = async () => {
        if (user) {
            const shoppingList = await getItems(user.uid);
            setItems(shoppingList);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    const handleAddItem = async (newItem) => {
        if (user) {
            const id = await addItem(user.uid, newItem);
            setItems([...items, { ...newItem, id }]);
        }
    };

    const handleDeleteItem = async (itemId) => {
        if (!user) {
            console.error("No user logged in");
            return;
        }

        try {
            console.log("Attempting to delete item with ID:", itemId);
            console.log("Current items state:", items.map(item => ({
                id: item.id,
                name: item.name,
                category: item.category
            })));
            
            // 先找到要删除的项目
            const itemToDelete = items.find(item => item.id === itemId);
            if (!itemToDelete) {
                console.error("Item not found in local state:", itemId);
                return;
            }

            console.log("Found item to delete:", {
                id: itemToDelete.id,
                name: itemToDelete.name,
                category: itemToDelete.category
            });
            
            // 调用删除函数
            await deleteItem(user.uid, itemId);
            
            // 更新本地状态
            setItems(prevItems => {
                const newItems = prevItems.filter(item => item.id !== itemId);
                console.log("Updated items state:", newItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    category: item.category
                })));
                return newItems;
            });
        } catch (error) {
            console.error("Failed to delete item:", error);
            // 这里可以添加用户提示
        }
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

    if (!user) {
        return (
            <div>
                <p>Your need to be signed in to view this page.</p>
            </div>
        );
    }

    return (
        <main className="p-6 min-h-screen bg-gray-800">
            <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
            <section className="flex flex-row items-start">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList 
                        items={items} 
                        onItemSelect={handleItemSelect}
                        onItemDelete={handleDeleteItem}
                    />
                </div>
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} /> 
                </div>
            </section>
        </main>
    );
}