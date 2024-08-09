// Custom Hook
import { useState, useEffect } from "react";
import { RES_MENU } from "./constants";

// Fetch Data
const useResMenu = (resid) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => { fetchFromSwiggyResMenuAPI() }, []);

    const fetchFromSwiggyResMenuAPI = async () => {
        const data = await fetch(RES_MENU + resid);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useResMenu;