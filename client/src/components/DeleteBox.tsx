import { useContext } from "react"
import { type ItemPayload } from "../contextAPI/context/ItemContext"
import { useItemOperations } from "../utils/itemOperations"
import { FormContext } from "../contextAPI/context/FormContext"
import { DeletContext } from "../contextAPI/context/DeleteContext"

export const DeleteBox = () => {
    const { id, title, description, price, image, category, rating, count } = useContext(FormContext)
    const { toggleDelete } = useContext(DeletContext)
    const newItem : ItemPayload = {
        id, title, description, price, image, category, rating, count
    }
    const { handleDeleteItem } = useItemOperations(newItem)
    
    return (
        <div className="bg-white rounded-lg w-1/2 h-1/2 ">
            <div className="w-full h-full grid grid-cols-1 justify-center items-center">
                {/* Aligning Vertically The Cross-svg and text */}
                <div className="flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" text-red-500 size-32">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <p className=" font-medium text-3xl text-black py-4">Are Your Sure ? </p>
                </div>
                <div className="flex  justify-between items-center space-x-1.5 mx-1 px-2">
                    <button 
                        onClick={() =>{
                            toggleDelete();
                        }}
                        className="font-bold w-full block rounded-lg p-3 text-white bg-gray-500 hover:text-slate-50 hover:scale-90 transistion duration-400  ease-in-out hover:bg-black  items-center cursor-pointer">
                            No
                    </button>
                    <button 
                        onClick={handleDeleteItem}
                        className="font-bold w-full rounded-lg p-3 text-white bg-red-500 hover:text-slate-50 hover:scale-90 transistion duration-400  ease-in-out hover:bg-black items-center cursor-pointer">
                            Yes
                    </button>
                </div>
            </div>
        </div>
    )
}