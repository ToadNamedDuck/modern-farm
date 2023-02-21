import { Catalog } from './catalog.js';
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';

let yearlyPlan = createPlan(); //Creates the randomized plan for this runtime
let seedsToPlant = plantSeeds(yearlyPlan); //invokes plantSeeds() from tractor.js, which preps usePlants.
let currentField = usePlants(seedsToPlant);//Invoke usePlants to return the populated field full of crops.
let currentHarvest = harvestPlants(currentField);//Invoke harvestPlants from harvester.js. Takes the array from usePlants, and multiplies the objects according to their output key.
Catalog(currentHarvest);//Populates HTML with information from the harvestPlants() function.


