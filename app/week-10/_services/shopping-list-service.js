import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc, doc, getDoc } from "firebase/firestore";

// Get all items for a specific user
export async function getItems(userId) {
    try {
        // Get reference to the items subcollection under the user's document
        const itemsCollection = collection(db, "users", userId, "items");
        
        // Get all documents in the items subcollection
        const querySnapshot = await getDocs(query(itemsCollection));
        
        // Map the documents to an array of items with their IDs
        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        return items;
    } catch (error) {
        console.error("Error getting items:", error);
        throw error;
    }
}

// Add a new item for a specific user
export async function addItem(userId, item) {
    if (!item.name || !item.category) {
        throw new Error("Item must have name and category");
    }
    
    try {
        // Get reference to the items subcollection under the user's document
        const itemsCollection = collection(db, "users", userId, "items");
        
        // Add the new item to the subcollection
        const docRef = await addDoc(itemsCollection, {
            name: item.name,
            quantity: item.quantity || 1,
            category: item.category
        });
        
        return docRef.id;
    } catch (error) {
        console.error("Error adding item:", error);
        throw error;
    }
}

// Delete an item for a specific user
export async function deleteItem(userId, itemId) {
    try {
        // Get reference to the specific item document
        const itemRef = doc(db, "users", userId, "items", itemId);
        
        // Delete the document
        await deleteDoc(itemRef);
        return itemId;
    } catch (error) {
        console.error("Error deleting item:", error);
        throw error;
    }
}
