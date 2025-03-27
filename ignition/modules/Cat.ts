// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const CatModule = buildModule("CatModule", (m) => {
  const cat = m.contract("Cat");

  return { cat };
});

export default CatModule;
