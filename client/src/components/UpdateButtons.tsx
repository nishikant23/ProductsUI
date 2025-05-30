import React from "react";
import { type ItemPayload } from "../contextAPI/context/ItemContext";
import { useItemOperations } from "../utils/itemOperations"


export const UpdateButtons = React.memo(({item} : {item: ItemPayload}) => {

    const { handleEditItem } = useItemOperations(item)
    
    return (
    <div className="imageButtons w-full mt-4">
        <button 
            onClick={handleEditItem}
            className="font-bold  rounded-lg p-3 text-white bg-gray-700 hover:text-slate-50 hover:scale-90 transistion duration-400  ease-in-out hover:bg-black w-full items-center  cursor-pointer">
                Edit Item
        </button>
    </div>
    )
})