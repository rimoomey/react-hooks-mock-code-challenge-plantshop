import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ props }) {
  const { isServerChange, searchText } = props;
  const [plants, setPlants] = useState([]);
  const api = "http://localhost:6001/plants";

  const fetchPlants = (link) => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
      });
  };

  useEffect(() => {
    fetchPlants(api);
  }, [isServerChange]);

  const makePlantCards = () => {
    if (searchText === "") {
      return plants.map((plant) => {
        return <PlantCard key={plant.id} props={plant} />;
      });
    } else {
      const filtered = plants.filter((plant) => {
        return plant.name.toUpperCase().includes(searchText.toUpperCase());
      });
      return filtered.map((plant) => {
        return <PlantCard key={plant.id} props={plant} />;
      });
    }
  };

  return <ul className="cards">{makePlantCards()}</ul>;
}

export default PlantList;
