import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [isServerChange, setIsServerChange] = useState(false);

  return (
    <main>
      <NewPlantForm callback={setIsServerChange}/>
      <Search />
      <PlantList props={isServerChange}/>
    </main>
  );
}

export default PlantPage;
