import { useMemo, useState, type FC, type ReactNode } from "react";
import { DeletContext } from "../context/DeleteContext";


interface DeleteProviderProps {
    children :  ReactNode,
}

export const DeleteProvider : FC<DeleteProviderProps> = ({children}) => {

    const [ isDelete, setIsDelete ] = useState<boolean>(false);

    const toggleDelete = () => {
        setIsDelete(p => !p)
    }

    const val = useMemo(() => ({
        isDelete, toggleDelete
    }),[isDelete])

    return (
        <DeletContext.Provider value={val}>
            {children}
        </DeletContext.Provider>
    )
}