import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from './Card';

function Item() {
  const [listProduct, setListProduct] = useState([]);
  const [type, setType] = useState("");

  const getData = () => {
    axios
      .get("https://61bc131bd8542f0017824588.mockapi.io/a/arrayproducts")
      .then((res) => {
        setListProduct(res.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="Products">
      {type === "" ? (
        listProduct.map((product) => (
          <Card
            key={product.id}
            image={product.avatar}
            nameItem={product.name}
            price={product.price}
          />
        ))
      ) : (
        listProduct
          .filter((product) => product.type === type)
          .map((product) => (
            <Card
              key={product.id}
              image={product.avatar}
              nameItem={product.name}
              price={product.price}
            />
          ))
      )}
    </div>
  );
}

export default Item;
