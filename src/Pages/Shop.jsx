import React from "react";
import { NavLink, Outlet } from "react-router-dom";
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
    <div className={Style.shopContainer}>
      <div>
        <h1>Artifacts List</h1>
      </div>
      <div className={Style.shop}>
        <nav>
          <ul>
            {items.map((item) => (
              <li key={item?.itemId}>
                <NavLink
                  className={({ isActive }) => (isActive ? Style.active : "")}
                  to={`/shop/${item.itemId}`}
                >
                  {item.item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;
