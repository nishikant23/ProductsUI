import { createContext } from "react";

interface SidebarContextType {
    sidebar :boolean,
    toggleSidebar : () => void,
}

export const SidebarContext = createContext<SidebarContextType>({
    sidebar : false,
    toggleSidebar : () => {},
});