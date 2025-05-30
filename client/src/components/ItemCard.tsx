import { useNavigate } from "react-router-dom";
import {  ItemContext, type ItemPayload } from "../context/ItemContext"
import { UpdateButtons } from "./UpdateButtons";
import { useContext } from "react";


export const ItemCard = ({item} : {item : ItemPayload}) => {
    const navigate = useNavigate();
        const { viewItemDetails } = useContext(ItemContext);
    
        const handleClick = () => {
            viewItemDetails();
            navigate(`/items/${item.id}`);
        }
         

     return <div id="itemCard" 
            className=" overflow-hidden w-full h-72 rounded-lg 
             hover:scale-105 transform duration-300 ease-in-out bg-slate-200 border-l-4 border-white bg-opacity-80 backdrop-blur-sm">
                
                <div 
                className="w-full h-full text-black p-4  grid grid-cols-12 gap-x-4 overflow-hidden cursor-pointer">

                    <div className="col-span-4 rounded-lg w-auto h-64 overflow-y-hidden flex items-center justify-center bg-white">
                        <img className="rounded-lg w-auto h-auto object-fit p-6 "
                        src={item.image}/>
                    </div>
                    
                    <div className="grid grid-cols-1  col-span-8 break-words overflow-y-hidden">
                        <h1 className="text-left text-xl font-semibold pb-2">{item.title}</h1>
                        <div className="ratingReview flex md:items-center py-2">
                        <div className=" bg-green-500 rounded-md w-max " >
                            <p className="text-md text-white px-2 ">{item.rating} ⭐</p>
                        </div>
                        <p className="text-md text-gray-500 px-2 "> ({item.count} reviews)</p>
                    </div>
                    <p className="text-left text-lg font-medium overflow-y-hidden overflow-x-hidden h-max"
                    >Price : ${item.price}</p>
                    <button 
                        onClick={handleClick}
                        className="font-semibold text-lg shadow-2xl rounded-lg p-2 text-white bg-gray-400 hover:text-slate-50 hover:scale-90 transistion duration-400  ease-in-out hover:bg-black w-full items-center cursor-pointer">
                            View Item
                    </button>
                    <UpdateButtons item={item}/>
                    </div>
                </div>  
    </div>
} 