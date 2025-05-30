import { useContext } from "react";
import { ItemContext } from "../context/ItemContext";
import { ItemCard } from "../components/ItemCard";
import { Navbar } from "../components/Navbar";
import { LeftSideBar } from "../components/LeftSideBar";
import { DeleteBox } from "../components/DeleteBox";


export const ItemList = () => {

    const { items, menu, isDelete } = useContext(ItemContext);
    console.log("Menu  = ", menu)
     return <div id="roomGrid" className="">
                    <div className="fixed shadow-lg w-full z-50 bg-slate-300">
                        <Navbar/>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 lg:4 pt-18 px-4 pb-4 ">
                        {items.map((item) => {
                            return <ItemCard
                                key={item.id}
                                item={item}
                            />;
                        })}  
                    </div>   
                    <div className={`leftSideBar fixed top-16 left-0 h-full z-40 w-60  justify-start transform transition-transform duration-300  ease-in-out 
                        ${menu ? "translate-x-0 ": "-translate-x-full"} ` }>
                            <LeftSideBar/>
                    </div> 
                    <div className={`deleteBox fixed inset-0 flex justify-center items-center z-50  transform transition-transform duration-300  ease-in-out 
                        ${isDelete ? "visible ": "collapse"} ` }>
                            <DeleteBox />
                    </div> 

        </div>
}