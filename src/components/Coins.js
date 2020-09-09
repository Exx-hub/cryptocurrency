import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContextProvider";

function Coins() {
  const { coins, search } = useContext(GlobalContext);
  //   console.log(coins);

  let f = coins.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  let mapped = f.map((coin) => (
    <div key={coin.id} className="coin-card">
      <div className="coin-details">
        <img src={coin.image} alt="" />
        <p>
          <strong>{coin.name}</strong>
        </p>
        <p>{coin.symbol}</p>

        <p style={{ textAlign: "start" }}>
          Curr: <strong>₱{coin.current_price.toLocaleString()}</strong>
        </p>
        <p
          className={
            coin.price_change_percentage_24h > 0 ? "positive" : "negative"
          }
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>

        <p
          style={{ marginRight: "15px" }}
        >{`Mkt Rank :  ${coin.market_cap_rank}`}</p>
        <p>₱{coin.market_cap.toLocaleString()}</p>
      </div>
    </div>
  ));

  return <div className="coin-container">{mapped}</div>;
}

export default Coins;
