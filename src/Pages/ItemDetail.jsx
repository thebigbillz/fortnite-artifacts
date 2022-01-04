import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  const [item, setItem] = React.useState({});

  React.useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await axios.get(
      `https://fortnite-api.theapinetwork.com/item/get?id=${id}`
    );
    const itemData = await response.data;
    console.log(itemData);
    setItem(itemData);
  };

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default ItemDetail;
