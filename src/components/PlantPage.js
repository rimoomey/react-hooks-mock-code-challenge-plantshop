import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [isServerChange, setIsServerChange] = useState(false);
  const [searchText, setSearchText] = useState("");

  return (
    <main>
      <NewPlantForm callback={setIsServerChange}/>
      <Search props={{ searchText, setSearchText }}/>
      <PlantList props={{isServerChange, searchText}}/>
    </main>
  );
}

export default PlantPage;
