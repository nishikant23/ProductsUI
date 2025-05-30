import type { FC, ReactNode } from "react"
import { ItemProvider } from "./ItemProvider"
import { FormProvider } from "./FromProvider"
import { SidebarProvider } from "./SidebarProvider"
import { DeleteProvider } from "./DeleteProvider"

interface AppProviderProps {
    children : ReactNode,
}
export const AppProvider : FC<AppProviderProps> = ({children}) => {

    return (
        <ItemProvider>
            <FormProvider>
                <SidebarProvider>
                    <DeleteProvider>
                        {children}
                    </DeleteProvider>
                </SidebarProvider>
            </FormProvider>
        </ItemProvider>
    )
}