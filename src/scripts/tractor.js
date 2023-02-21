import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

//tractor is the framework for using addPlant() from field.js, as well as utilizing the create[PLANT]() methods from the seed files.


//It creates static variable objects, which are a representation of each type of seed. 

const potatoSeed = createPotato();
const wheatSeed = createWheat();
const cornSeed = createCorn();
const asparagusSeed = createAsparagus();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();


export const plantSeeds = (plantingPlan) => {//This function accepts an array as an input, created by the randomized plan.
    for (const rows of plantingPlan) {//We iterate through the plan, and match the current rows object to the correct seed type, and then we call addPlant with the correct seed.
        for (const seed of rows) {
            if(seed === "Potato"){
                addPlant(potatoSeed);
            }
            else if(seed === "Wheat"){
                addPlant(wheatSeed);
            }
            else if(seed === "Corn"){
                addPlant(cornSeed);
            }
            else if(seed === "Asparagus"){
                addPlant(asparagusSeed);
            }
            else if(seed === "Soybean"){
                addPlant(soybeanSeed);
            }
            else if(seed === "Sunflower"){
                addPlant(sunflowerSeed);
            }
        }
    }
}