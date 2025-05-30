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
    viewItem : boolean;
    error : unknown | null;

    id: number,
    title : string;
    description : string;
    price : number;
    image : string;
    category : string;
    rating : number;
    count: number;
    isFormEditing : boolean;

    addItem : (item : ItemPayload) => void;

    updateItem : (item : ItemPayload) => void;
    deleteItem : (id: number) => void;
    viewItemDetails : () => void;

    setFormProps : (
        id :number,
        title : string,
        description : string,
        price : number,
        image : string,
        category : string,
        rating : number,
        count: number,
        isFormEditing : boolean
    ) => void

    menu :boolean,
    sideBarOpen : () => void,
    
}
export const ItemContext = createContext<ItemContextType>({
    items : [],
    loading : false,
    viewItem : false,
    error : null,
    id : 0,
    title : "",
    description : "",
    price : 0,
    image : '',
    category : "",
    rating : 0,
    count: 0,
    isFormEditing : false,
    addItem : () => {},
    updateItem : () => {},
    deleteItem : () => {},
    viewItemDetails : () => {},
    setFormProps : () => {},
    menu : false,
    sideBarOpen : () => {}
 }); 