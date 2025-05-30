import { useEffect, useMemo, useState, type FC, type ReactNode } from "react";
import { ItemContext, type ItemPayload } from "../context/ItemContext";

interface ItemProviderProps {
    children : ReactNode
}



export const ItemProvider : FC<ItemProviderProps> = ({ children }) => {

    const [ items, setItems ] = useState<ItemPayload[]>([]);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<unknown | null>(null);
    
    const [ viewItem, setViewItem ] = useState<boolean>(false);
    const [ itemsFetched, setItemsFetched ] = useState<boolean>(false);

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
        setItems((existingItems) => (
            
            existingItems.map((currItem) => currItem.id === updatedItem.id ? updatedItem : currItem)
        ))
    }

    const deleteItem = (id: number) => {
        setItems((existingItems) => (
            existingItems.filter((currItem) => currItem.id != id)
        ))
    }
    const viewItemDetails = () => {
        setViewItem(p => !p)
    }

    const val = useMemo(() => ({
        items, loading, error, viewItem, addItem, updateItem, deleteItem, viewItemDetails
    }),[items, loading, error, viewItem])

    return (
        <ItemContext.Provider value ={val}>
            {children}
        </ItemContext.Provider>
    )

}


