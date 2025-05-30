import { useContext, useEffect, useState } from "react"
import { ItemContext, type ItemPayload } from "../contextAPI/context/ItemContext"
import { useNavigate } from "react-router-dom";
import { FormContext } from "../contextAPI/context/FormContext";



export const FormComponent = () => {
    const [ id, setId ] = useState<number>(0);
    const [ title, setTitle ] = useState<string>("")
    const [ description, setDescription ] = useState<string>("")
    const [ price, setPrice ] = useState<string>('')
    const [ image, setImage ] = useState<string>('')
    const [ category, setCategory ] = useState<string>("")
    const [ rating, setRating ] = useState<string>('')
    const [ count, setCount ] = useState<string>('')
    const [ isSubmitting, setIsSubmitting ] = useState<boolean>(false);

    const navigate = useNavigate();

    const categories :string[] = ["Men's Clothing", "Women's Clothing", "Electronics", "Jewelery"]
    
    const { id : contextId, title: contextTitle, description: contextDescription, price: contextPrice, 
            image: contextImage, category: contextCategory, rating: contextRating, 
            count: contextCount, isFormEditing, resetForm, formSubmissionType} = useContext(FormContext);

    const { items, updateItem, addItem } = useContext(ItemContext)

    useEffect(() => {
        
        if (isFormEditing && contextTitle) {
            setId(contextId);
            setTitle(contextTitle);
            setDescription(contextDescription);
            setPrice(contextPrice.toString());
            setImage(contextImage);
            setCategory(contextCategory);
            setRating(contextRating.toString());
            setCount(contextCount.toString());
        }
    }, [isFormEditing, contextId, contextTitle, contextDescription, contextPrice, 
        contextImage, contextCategory, contextRating, contextCount]);
    
    
    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        const numericPrice = parseFloat(price);
        const numericRating = parseFloat(rating);
        const numericCount = parseFloat(count);
        if (!isNaN(numericPrice) && !isNaN(numericRating) && !isNaN(numericCount)) {
            setIsSubmitting(true);

            if(isFormEditing && contextTitle){
                const newItem : ItemPayload = {
                    id: id,
                    title: title,
                    description: description,
                    price: numericPrice,
                    image : image,
                    category: category,
                    rating : numericRating,
                    count : numericCount,
                }
                updateItem(newItem);

                // setTitle("");
                // setDescription("");
                // setPrice("");
                // setImage("");
                // setCategory("");
                // setRating("");
                // setCount("");
            }
            else {
                addItem({
                id: items.length+1,
                title: title,
                description: description,
                price: numericPrice,
                image : image,
                category: category,
                rating : numericRating,
                count : numericCount,
                });

                // setTitle("");
                // setDescription("");
                // setPrice("");
                // setImage("");
                // setCategory("");
                // setRating("");
                // setCount("");
            }
            resetForm();
            navigate('/items'); //After navigation not visible in new Items List
        } 
    }

    return (
        <div className="ItemForm ">
            <div className="rounded-xl mx-auto border border-slate-200 shadow-2xl max-w-3xl  p-4 bg-white ">
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {formSubmissionType}
                </p>
                
                {/* Input Fields */}
                <form onSubmit={handleSumbit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-md font-medium text-gray-600 mb-1">Title *</label>
                        <input 
                            type="text" 
                            id="title" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            required
                            className="rounded-lg border border-gray-300 focus:ring-black p-2 w-full"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-md font-medium text-gray-600 mb-1">Description *</label>
                        <textarea 
                            rows={3} 
                            id="description" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            required
                            className="rounded-lg border border-gray-300 focus:ring-black p-2 w-full"/>
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-md font-medium text-gray-600 mb-1">Price *</label>
                        <input 
                            type="text" 
                            id="price" 
                            value={price} 
                            onChange={(e) => {
                                const val = e.target.value
                                if(/^[0-9]*\.?[0-9]*$/.test(val)) setPrice(val)}} 
                            required
                            className="rounded-lg border border-gray-300 focus:ring-black p-2 w-full"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="image" className="block text-md font-medium text-gray-600 mb-1">Image *</label>
                        <input 
                            type="text" 
                            id="image" 
                            value={image} 
                            onChange={(e) => {
                                const val = e.target.value
                                setImage(val)}} 
                            required
                            className="rounded-lg border border-gray-300 focus:ring-black p-2 w-full"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-md font-medium text-gray-600 mb-1">Category *</label>
                        <select className="rounded-lg border border-gray-300 focus:ring-black p-2 w-full"
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required>
                                <option value={''}>Select a Category</option>
                                {categories.map((categoryText, index) => (
                                    <option key={index} value={categoryText}>{categoryText}</option>
                                ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-md font-medium text-gray-600 mb-1">Rating *</label>
                        <input 
                            type="text" 
                            id="rating" 
                            value={rating} 
                            onChange={(e) => {
                                const val = e.target.value;
                                if(/[0-9]*\.?[0-9]*$/.test(val)) setRating(val);
                            }} 
                            required
                            className="rounded-lg border border-gray-300 focus:ring-black p-2 w-full"/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="count" className="block text-md font-medium text-gray-600 mb-1">Reviews Count *</label>
                        <input 
                            type="text" 
                            id="count" 
                            value={count} 
                            onChange={(e) => {
                                const val = e.target.value;
                                if(/^[0-9]*\.?[0-9]*$/.test(val)) setCount(val)
                            }} 
                            required
                            className="rounded-lg border border-gray-300 focus:ring-black p-2 w-full"/>
                    </div>

                    {/* Submit button */}
                    <div className="flex justify-end">
                        <button 
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-3 bg-black text-white 
                            font-semibold rounded-lg hover:shadow-lg transform transition-all duration-200 
                            hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                            {isSubmitting ? 'uploading...' : 'Upload Item'}
                        </button>
                    </div>
                </form>

               
            </div>
        </div>
    )
}