import React from "react";
import "./App.css";
import GlobalContextProvider from "./contexts/GlobalContextProvider";
import Input from "./components/Input";
import Coins from "./components/Coins";
import Header from "./components/Header";

function App() {
  return (
    <GlobalContextProvider>
      <div className="App">
        <Header />
        <Input />
        <Coins />
      </div>
    </GlobalContextProvider>
  );
}

export default App;
