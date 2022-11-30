import React, { useState } from "react";

function NewPlantForm({ callback }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });
  const api = "http://localhost:6001/plants";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log("Object: ", formData);
  console.log("Jsonified Object: ", JSON.stringify(formData));

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newEntry) => {
        callback(true);
        console.log("New entry", newEntry);
      });
  };
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          step="0.01"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
