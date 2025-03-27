import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AnimalModule = buildModule("AnimalModule", (m) => {
  const cat = m.contract("Cat");
  const dog = m.contract("Dog");

  return { cat, dog };
});

export default AnimalModule;
