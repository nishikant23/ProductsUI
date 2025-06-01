import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { ItemContext } from "../contextAPI/context/ItemContext"
import { Navbar } from "../components/Navbar";
import { UpdateButtons } from "../components/UpdateButtons";
import { DeleteButton } from "../components/DeleteButton";
import { DeleteBox } from "../components/DeleteBox";
import { DeletContext } from "../contextAPI/context/DeleteContext";

 const ItemDetails = () => {

    const { id } = useParams<string>();
    const { items } = useContext(ItemContext);
    const { isDelete } = useContext(DeletContext);
    const navigate = useNavigate();

    const offers  : string[] = ["5% Unlimited Cashback on Flipkart Axis Bank Credit Card",
        "10% off up to ₹1,500 on all Axis Bank Credit Card (incl. migrated ones) EMI Txns of ₹5,000 and above",
        "10% instant discount on SBI Credit Card EMI Transactions, up to ₹1,500 on orders of ₹5,000 and above"
    ]

    const item  = items.find( (currItem) => currItem.id.toString() == id);
    if(!item) return <p className="flex justify-center items-center text-black font-bold text-xl">Item not found.</p>;

    
    return (
        <div className=" text-black rounded-md  w-full h-screen  verflow-y-auto "> 
            <div className="fixed shadow-lg w-full z-50">
                <Navbar/>
            </div>
            <div className=" flex flex-col justify-center items-center md:grid md:grid-cols-12 pt-18 px-8 gap-6 overflow-y-auto md:overflow-hidden">
                {/* Image Container */}
                <div className="itemImage  md:col-span-4 items-center  w-auto h-auto p-3">
                    <img className="rounded-lg w-full h-full object-contain p-4 transition-transform duration-500 ease-in-out hover:scale-125 " 
                        src={item.image}
                        alt={item.title}/>
                </div>

                {/* Item Details */}
                <div className=" itemDetails flex flex-col justify-left md:col-span-8 bg-slate-100 p-6 rounded-lg shadow-lg overflow-y-auto max-h-[85vh] z-10">

                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-semibold text-left">{item.title}</h1>

                        <button onClick={() => {navigate('/items')}} className="flex justify-between items-center text-xl text-gray-600 font-semibold cursor-pointer transistion duration-300 ease-in-out hover:scale-105">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="items-center size-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>

                            <p className="items-center">Back</p>
                        </button>
                    </div>

                    <div className="ratingReview flex md:items-center py-2">
                        <div className=" bg-green-500 rounded-md w-max " >
                            <p className="text-md text-white px-2 ">{item.rating} ⭐</p>
                        </div>
                        <p className="text-md text-gray-500 px-2 "> ({item.count} reviews)</p>
                    </div>

                    <div className="py-2">
                        <p className="text-lg font-semibold text-green-500">Special price</p>
                        <p className="text-xl font-semibold mt-1">${item.price}</p>
                    </div>
                    <div className="mb-2">
                        <p className="text-red-500 text-sm my-1">Hurry, Only a few left!</p>
                        <h2 className="font-bold pb-2">Available offers</h2>
                            {offers.map((offer, index) => (
                                 <div key={index} className="offersOnItem flex items-center flex-nowrap py-1">
                                    <img
                                        src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90"
                                        width="18"
                                        height="18"
                                        className="mr-2 shrink-0"
                                        alt="bank offer icon"
                                    />
                                    <p className="text-sm flex flex-wrap">
                                        <span className="font-semibold pr-1">Bank Offer</span>
                                        <span className="pr-1">{offer}</span>
                                        <span className="text-blue-500 pr-1 cursor-pointer">T&C</span>
                                    </p>
                                </div>
                            ))}
                        <p className="text-md text-blue-500 cursor-pointer">View 7 more offers</p>
                    </div>

                    {/* Item Specifications */}
                    <div className="rounded-md border p-2 w-auto mt-4  space-y-4">
                        <span >
                            <p className="text-lg  font-semibold">Category :</p>
                            <p className="text-md text-gray-500 font-semibold"> {item.category}</p>
                        </span>
                        <span >
                            <p className="text-lg  font-semibold">Item Specification : </p>
                            <p className="text-md text-gray-700">{item.description}</p>
                        </span>
                    </div>

                    {/* Edit and Delete Buttons */}
                    <div className="flex justify-between space-x-1.5">
                        <UpdateButtons item={item}/>
                        <DeleteButton item={item}/>
                    </div>

                </div>
            </div>
            <div className={`deleteBox fixed inset-0 flex justify-center items-center z-50  transform transition-transform duration-300  ease-in-out 
                ${isDelete ? "visible ": "collapse"} ` }>
                    <DeleteBox />
            </div>
        </div>
    )
}
export default ItemDetails;