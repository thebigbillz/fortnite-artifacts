import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import Style from "./ItemDetail.module.css";
import { Rating, Typography } from "@mui/material";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = React.useState({
    itemId: "",
    item: {
      ratings: {
        avgStars: "",
      },
    },
  });

  React.useEffect(() => {
    getItem();
  }, [id]);

  const getItem = async () => {
    console.log("here");
    const response = await axios.get(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
    );
    const itemData = await response.data.data;
    console.log(itemData);
    setItem(itemData);
  };

  return (
    <div className={Style.item}>
      <h2>{item.item.name}</h2>
      <div>
        <p>Cost</p>
        <p>{item.item.cost || "Free"}</p>
      </div>
      <div>
        <p>Rarity</p>
        <p>{item.item.rarity}</p>
      </div>
      <div>
        <p>Type</p>
        <p>{item.item.type}</p>
      </div>

      <div>
        <p>Rating</p>
        <Rating
          name="read-only"
          value={item.item.ratings.avgStars}
          precision={0.1}
          readOnly
        />
      </div>
      <img
        style={{ width: "auto", height: "15rem", margin: "1rem" }}
        src={item.item.images?.icon}
        alt=""
      />
    </div>
  );
};

export default ItemDetail;
