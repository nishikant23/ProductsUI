import { useCallback, useContext } from "react";
import { ItemContext, type ItemPayload } from "../context/ItemContext";
import { useNavigate } from "react-router-dom";

export const useItemOperations = (item : ItemPayload) => {
    const { setFormProps, deleteItem } = useContext(ItemContext);
    const navigate = useNavigate();

    const handleEditItem = useCallback(() => {
        setFormProps(
            item.id, 
            item.title, 
            item.description, 
            item.price, 
            item.image, 
            item.category, 
            item.rating, 
            item.count, 
            true)
        navigate(`/items/${item.id}/edit`)
    },[item, setFormProps, navigate])
    const handleDeleteItem = useCallback(() => {
        deleteItem(item.id);
        navigate(`/items`)
    },[item.id, deleteItem,navigate])
    return {
        handleEditItem,
        handleDeleteItem,
    }
}