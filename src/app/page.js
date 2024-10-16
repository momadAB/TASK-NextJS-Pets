import PetsList from "./components/PetsList";
import pets from "./data/pets";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <h1 className="leading-relaxed font-primary font-extrabold text-4xl text-center text-palette-primary mt-4 py-2 sm:py-4">
        Fur-ends
      </h1>
      <PetsList pets={pets} />
    </div>
  );
}
