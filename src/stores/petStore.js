import petsData from "../petsData";
import { makeAutoObservable } from "mobx";

class PetStore {
  constructor() {
    makeAutoObservable(this);
  }

  pets = petsData;

  adoptPet = (petId) => {
    this.pets = this.pets.filter((pet) => pet.id !== petId);
  };

  addPet = (newPet) => {
    newPet["id"] = this.pets.length + 1;
    console.log(newPet);
    this.pets.push(newPet);
  };
}

const petStore = new PetStore();

export default petStore;
