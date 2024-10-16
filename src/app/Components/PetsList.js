"use client";

import { useState } from "react";
import { useEffect } from "react";
import PetItem from "./PetItem.js";
import SearchBar from "./SearchBar.js";
import filterPetsList from "./filterPetsList.js";

function PetsList({ pets }) {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [petList, setPetList] = useState([]);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  const newPets = pets.filter((pet) => !adoptedPets.includes(pet.name));

  // I think this isnt the ideal way to do it but I couldnt get it working otherwise
  useEffect(() => {
    console.log("HELLO ", adoptedPets);
    // setPetList(...petList);
    filterPetsList(pets, query, type, adoptedPets, setAdoptedPets, setPetList);
    // setPetList(...petList);
  }, [adoptedPets]);

  return (
    <>
      <SearchBar
        setPetList={setPetList}
        pets={newPets}
        adoptedPets={adoptedPets}
        setAdoptedPets={setAdoptedPets}
        query={query}
        setQuery={setQuery}
        type={type}
        setType={setType}
      />
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
