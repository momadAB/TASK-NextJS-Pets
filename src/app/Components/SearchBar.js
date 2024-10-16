import React from "react";
import { useState } from "react";
import PetItem from "./PetItem";

function SearchBar({ pets, setPetList }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");

  function filterPetsList(query, type) {
    if (type !== "") {
      setPetList(
        pets
          // Filters petList to the type and name, no adopted pets
          .filter((pet) => {
            return pet.type === type && pet.name.toLowerCase().includes(query);
          })
          .map((pet) => <PetItem pet={pet} key={pet.id} />)
      );
    } else {
      setPetList(
        pets
          // Filters petList to the name only, no adopted pets
          .filter((pet) => {
            return pet.name.toLowerCase().includes(query);
          })
          .map((pet) => <PetItem pet={pet} key={pet.id} />)
      );
    }
  }

  function handleQuery(e) {
    setQuery(e.target.value);

    filterPetsList(e.target.value, type);
  }

  function handleType(e) {
    setType(e.target.value);

    filterPetsList(query, e.target.value);
  }

  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col items-start space-y-1 flex-grow">
            <input
              type="search"
              placeholder="search"
              className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
              onChange={handleQuery}
              value={query}
            />
          </div>
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <select
              onChange={handleType}
              defaultValue={""}
              className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
            >
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
