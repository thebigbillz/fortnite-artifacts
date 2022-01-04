import React from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import Style from "./shop.module.css";

const Shop = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const response = await axios.get(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );
    const itemData = await response.data.data;
    console.log(itemData);
    setItems(itemData);
  };

  return (
    <div className={Style.shop}>
      <nav>
        <h1>Fortnite Artifacts</h1>
        <ul>
          {items.map((item) => (
            <Link to={`/shop/${item.itemId}`}>
              <li key={item?.itemId}>{item.item.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Shop;
