import { createContext } from "react";


interface DeletContextType {
    isDelete : boolean,
    toggleDelete : () => void,
}


export const DeletContext = createContext<DeletContextType>({
    isDelete : false,
    toggleDelete : () => {}
})