import React, { useState } from "react";

function PlantCard({ props }) {
  const { name, image, price } = props;
  const [inStock, setInStock] = useState(true);

  const handleClick = () => {
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={handleClick}>In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
