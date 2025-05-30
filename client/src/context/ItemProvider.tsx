import { useEffect, useState, type FC, type ReactNode } from "react";
import { ItemContext, type ItemPayload } from "./ItemContext";

interface ItemProviderType {
    children : ReactNode
}



export const ItemProvider : FC<ItemProviderType> = ({ children }) => {

    const [ items, setItems ] = useState<ItemPayload[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ viewItem, setViewItem ] = useState<boolean>(false);
    const [ error, setError ] = useState<unknown | null>(null);

    //ItemForm States
    const [ id, setId ] = useState<number>(0)
    const [ title, setTitle ] = useState<string>("")
    const [ description, setDescription ] = useState<string>("")
    const [ price, setPrice ] = useState<number>(0)
    const [ image, setImage ] = useState<string>('')
    const [ category, setCategory ] = useState<string>("")
    const [ rating, setRating ] = useState<number>(0)
    const [ count, setCount ] = useState<number>(0)
    const [isFormEditing, setIsFormEditing] = useState<boolean>(false);
    const [ itemsFetched, setItemsFetched ] = useState<boolean>(false);
    const [ menu, setMenu ] = useState<boolean>(false);


    //Loading Items
    useEffect(() => {
        const fetchItems = async () => {
            try{
                console.log("AAA")
                const response = await fetch('/products.json');
                if(!response.ok) throw new Error("Error in fetching Items");
                const data  = await response.json() as ItemPayload[]
                setItems(data);
                setItemsFetched(true);

            } catch (err : unknown) {
                setError(err);
            } finally {
                setLoading(false);
            }
        } 
        if(!itemsFetched) {
            fetchItems();
        } else {
            console.log("BBB")
            setLoading(false);
        }
    }, [itemsFetched])

    const addItem = (newItem : ItemPayload) => {
        setItems((existingItems) => [...existingItems, newItem])
    }

    const updateItem = (updatedItem : ItemPayload) => {
        console.log("CONTEXT A")
        console.log("From Context API PRICE : ", updatedItem.price)
        setItems((existingItems) => (
            
            existingItems.map((currItem) => currItem.id === updatedItem.id ? updatedItem : currItem)
        ))
        console.log("CONTEXT ")
    }

    const deleteItem = (id: number) => {
        setItems((existingItems) => (
            existingItems.filter((currItem) => currItem.id != id)
        ))
    }

    const viewItemDetails = () => {
        setViewItem(true);
    }
    const setFormProps = (
            newId : number,
            newTitle : string, 
            newDescription : string, 
            newPrice  :number, 
            newImage : string,
            newCategory : string, 
            newRating : number, 
            newCount : number,
            newIsFormEditing : boolean
        ) => {
            setId(newId);
            setTitle(newTitle);
            setDescription(newDescription);
            setPrice(newPrice);
            setImage(newImage);
            setCategory(newCategory);
            setRating(newRating);
            setCount(newCount);
            setIsFormEditing(newIsFormEditing);
    }

    const sideBarOpen = () => {
        setMenu(p => !p)
    }

    return (
        <ItemContext.Provider 
            value ={{items, loading, viewItem, error, addItem, updateItem, deleteItem, viewItemDetails, id, title, description, price, image,  category, rating, count, isFormEditing, setFormProps, menu, sideBarOpen}}>
            {children}
        </ItemContext.Provider>
    )

}


