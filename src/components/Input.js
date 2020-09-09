import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContextProvider";

function Input() {
  const { search, setSearch } = useContext(GlobalContext);
  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search for a currency..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Input;
