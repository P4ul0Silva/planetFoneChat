import { ReactNode } from "react"; 
import {UserProvider} from "./Users/UserContext";
import { MessagesProvider } from "./Messages/MessagesContext";


interface ProviderProps {
    children: ReactNode;
}

export function Providers({children}: ProviderProps) {

    return (
        <UserProvider>
            <MessagesProvider>
                {children}
            </MessagesProvider>
        </UserProvider>
    )
}
