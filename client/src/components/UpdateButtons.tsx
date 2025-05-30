import { type ItemPayload } from "../context/ItemContext";
import { useItemOperations } from "../utils/itemOperations"


export const UpdateButtons = ({item} : {item: ItemPayload}) => {

    const { handleDeleteItem, handleEditItem } = useItemOperations(item)
    
    return (
    <div className="imageButtons flex  items-center space-x-4 mt-4">
       
        <button 
            onClick={handleEditItem}
            className="font-bold  rounded-lg p-3 text-white bg-gray-700 hover:text-slate-50 hover:scale-90 transistion duration-400  ease-in-out hover:bg-black w-full items-center  cursor-pointer">
                Edit Item
        </button>
        <button 
            onClick={handleDeleteItem}
            className="font-bold  rounded-lg p-3 text-white bg-red-500 hover:text-slate-50 hover:scale-90 transistion duration-400  ease-in-out hover:bg-black w-full items-center cursor-pointer">
                Delete Item
        </button>
    </div>
    )
}