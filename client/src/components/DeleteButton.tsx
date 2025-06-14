import React, { useContext } from "react";
import { type ItemPayload } from "../contextAPI/context/ItemContext";
import { FormContext } from "../contextAPI/context/FormContext";
import { DeletContext } from "../contextAPI/context/DeleteContext";

export const DeleteButton = React.memo(({item} : {item: ItemPayload}) => {
    const { setFormProps } = useContext(FormContext)
    const { toggleDelete } = useContext(DeletContext)

    return (
    <div className="imageButtons mt-4 w-full">
        <button 
            onClick={() =>{
                setFormProps(
                    item.id,
                    item.title,
                    item.description,
                    item.price,
                    item.image,
                    item.category,
                    item.rating,
                    item.count,
                    true,
                )
                toggleDelete();
            }}
            className="font-bold rounded-lg p-3 text-white bg-red-500 hover:text-slate-50 hover:scale-90 transistion duration-400  ease-in-out hover:bg-black w-full items-center cursor-pointer">
                Delete Item
        </button>
    </div>
    )
})