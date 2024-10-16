import React from "react";
import PetItem from "./PetItem";

function filterPetsList(
  pets,
  query,
  type,
  adoptedPets,
  setAdoptedPets,
  setPetList
) {
  console.log("FILTER");

  if (type !== "") {
    setPetList(
      pets
        // Filters petList to the type and name, no adopted pets
        .filter((pet) => {
          return (
            pet.type === type &&
            pet.name.toLowerCase().includes(query) &&
            !adoptedPets.includes(pet.name)
          );
        })
        .map((pet) => (
          <PetItem
            pet={pet}
            key={pet.id}
            adoptedPets={adoptedPets}
            setAdoptedPets={setAdoptedPets}
          />
        ))
    );
  } else {
    setPetList(
      pets
        // Filters petList to the name only, no adopted pets
        .filter((pet) => {
          return (
            pet.name.toLowerCase().includes(query) &&
            !adoptedPets.includes(pet.name)
          );
        })
        .map((pet) => (
          <PetItem
            pet={pet}
            key={pet.id}
            adoptedPets={adoptedPets}
            setAdoptedPets={setAdoptedPets}
          />
        ))
    );
  }
}

export default filterPetsList;
