import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([]);
  const api = "http://localhost:6001/plants";

  const fetchPlants = (link) => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => setPlants(data));
  };

  useEffect(() => {
    fetchPlants(api);
  }, []);

  const makePlantCards = () => {
    return plants.map((plant) => {
      return <PlantCard key={plant.id} props={plant} />;
    });
  };

  return <ul className="cards">{makePlantCards()}</ul>;
}

export default PlantList;
