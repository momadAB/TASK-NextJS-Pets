"use client";

import { useState } from "react";
import { useEffect } from "react";
import PetItem from "./PetItem.js";
import SearchBar from "./SearchBar.js";

function PetsList({ pets }) {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [petList, setPetList] = useState([]);

  const newPets = pets.filter((pet) => !adoptedPets.includes(pet.name));

  useEffect(() => {
    setPetList(
      newPets.map((pet) => (
        <PetItem
          pet={pet}
          key={pet.id}
          adoptedPets={adoptedPets}
          setAdoptedPets={setAdoptedPets}
        />
      ))
    );
  }, [adoptedPets, pets]);

  return (
    <>
      <SearchBar
        setPetList={setPetList}
        pets={newPets}
        adoptedPets={adoptedPets}
      />
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
