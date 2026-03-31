import { createContext, useState } from "react"

export const urlContext = createContext();

const UrlContext = ({ children }) => {
    const [urls, setUrls] = useState([]);

    return (
        <urlContext.Provider value={{ urls, setUrls }}>
            {children}
        </urlContext.Provider>
    )
}

export default UrlContext
