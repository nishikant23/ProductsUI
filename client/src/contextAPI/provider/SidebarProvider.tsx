import { useMemo, useState, type FC, type ReactNode } from "react";
import { SidebarContext } from "../context/SidebarContex";


interface SidebarProviderProps {
    children : ReactNode,
}

export const SidebarProvider : FC<SidebarProviderProps> = ({children}) => {

    const [ sidebar, setSidebar ] = useState<boolean>(false);
    
    const toggleSidebar = () => {
        setSidebar(p => !p)
    }

    const val = useMemo(() => ({
        sidebar, toggleSidebar
    }),[sidebar])

    return(
        <SidebarContext.Provider value={val}>
            {children}
        </SidebarContext.Provider>
    )
}