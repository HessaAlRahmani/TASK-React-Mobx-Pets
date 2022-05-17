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
    //newPet.id = this.pets[this.pets.length-1]+1       Rahaf's way
    console.log(newPet);
    this.pets.push(newPet);
  };

  updatePet = (updatedPet) => {
    this.pets = this.pets.map((pet) =>
      pet.id === updatedPet.id ? updatedPet : pet
    );
  };
}

const petStore = new PetStore();

export default petStore;
