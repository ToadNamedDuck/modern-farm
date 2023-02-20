import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

const potatoSeed = createPotato();
const wheatSeed = createWheat();
const cornSeed = createCorn();
const asparagusSeed = createAsparagus();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();


export const plantSeeds = (plantingPlan) => {
    for (const rows of plantingPlan) {
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