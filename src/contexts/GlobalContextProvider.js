import React, { useEffect, useState } from "react";
import axios from "axios";

const url =
  " https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=20&page=1&sparkline=false";

export const GlobalContext = React.createContext();

function GlobalContextProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get(url);
        setCoins(result.data);
      } catch (error) {
        console.log("error fetching data");
      }
    };
    getData();
  }, []);

  return (
    <GlobalContext.Provider value={{ search, setSearch, coins }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvider;
