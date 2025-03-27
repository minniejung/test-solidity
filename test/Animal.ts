import { expect } from "chai";
import { ethers } from "hardhat";

describe("Dog Contract", function () {
  let dog: any;

  beforeEach(async () => {
    const Dog = await ethers.getContractFactory("Dog");
    dog = await Dog.deploy();
  });

  it("should return species as 'Dog'", async () => {
    const species = await dog.species();
    expect(species).to.equal("Dog");
  });

  it("should return sound as 'Bark'", async () => {
    const sound = await dog.makeSound();
    expect(sound).to.equal("Bark");
  });
});

describe("Cat Contract", function () {
  let cat: any;

  beforeEach(async () => {
    const Cat = await ethers.getContractFactory("Cat");
    cat = await Cat.deploy();
  });

  it("should return species as 'Cat'", async () => {
    const species = await cat.species();
    expect(species).to.equal("Cat");
  });

  it("should return sound as 'Meow'", async () => {
    const sound = await cat.makeSound();
    expect(sound).to.equal("Meow");
  });
});
