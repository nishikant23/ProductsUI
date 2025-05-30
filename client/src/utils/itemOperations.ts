import { useCallback, useContext } from "react";
import { ItemContext, type ItemPayload } from "../contextAPI/context/ItemContext";
import { useNavigate } from "react-router-dom";
import { FormContext } from "../contextAPI/context/FormContext";
import { DeletContext } from "../contextAPI/context/DeleteContext";

export const useItemOperations = (item : ItemPayload) => {
    const { setFormProps, setFormType} = useContext(FormContext);
    const {  toggleDelete} = useContext(DeletContext);
    const {  deleteItem } = useContext(ItemContext);
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
        setFormType("Update Existing Content")
        navigate(`/items/${item.id}/edit`)
    },[item, setFormProps, navigate, setFormType])


    const handleDeleteItem = useCallback(() => {
        deleteItem(item.id);
        toggleDelete();
        navigate(`/items`)
    },[item.id, deleteItem, navigate, toggleDelete])
    return {
        handleEditItem,
        handleDeleteItem,
    }
}