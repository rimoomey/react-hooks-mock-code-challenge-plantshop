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
        if (searchText === "") {
          setPlants(data);
        } else {
          const filtered = data.filter((plant) => {
            return plant.name.toUpperCase().includes(searchText.toUpperCase());
          });
          setPlants(filtered);
        }
      });
  };

  useEffect(() => {
    fetchPlants(api);
  }, [isServerChange, searchText]);

  const makePlantCards = () => {
    return plants.map((plant) => {
      return <PlantCard key={plant.id} props={plant} />;
    });
  };

  return <ul className="cards">{makePlantCards()}</ul>;
}

export default PlantList;
