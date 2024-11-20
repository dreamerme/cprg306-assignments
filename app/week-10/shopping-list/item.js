import { useState } from 'react';

export default function Item({id, name, quantity, category, onSelect, onDelete}) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async (e) => {
        e.stopPropagation();
        if (!id) {
            console.error("Cannot delete item without ID:", { id, name, category });
            return;
        }
        
        console.log("Item component: Deleting item:", { id, name, category });
        setIsDeleting(true);
        try {
            await onDelete(id);
        } catch (error) {
            console.error("Failed to delete item:", error);
            setIsDeleting(false);
        }
    };

    return (    
        <div className="max-w-md flex justify-between p-4 bg-gray-500 shadow-md my-3">
            <div onClick={onSelect} className="flex-1 cursor-pointer">
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-gray-300">
                    Buy {quantity} in {category}
                </p>
            </div>
            <button 
                onClick={handleDelete}
                disabled={isDeleting}
                className={`px-2 py-1 ${
                    isDeleting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-red-500 hover:bg-red-600'
                } text-white rounded transition-colors`}
            >
                {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
        </div>
    );
}