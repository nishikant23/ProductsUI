import { createContext } from "react";

export interface ItemPayload {
    "id": number;
    "title": string;
    "price": number;
    "description": string;
    "category": string;
    "image": string;
    "rating": number;
    "count": number;
}


export interface ItemContextType {
    items : ItemPayload[];
    loading : boolean;
    error : unknown | null;
    viewItem: boolean;
    addItem : (item : ItemPayload) => void;
    updateItem : (item : ItemPayload) => void;
    deleteItem : (id: number) => void;

    viewItemDetails : () => void;
}
export const ItemContext = createContext<ItemContextType>({
    items : [],
    loading : false,
    error : null,
    viewItem : false,
    addItem : () => {},
    updateItem : () => {},
    deleteItem : () => {},
    viewItemDetails : () => {},
 }); 