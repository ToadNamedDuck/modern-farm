import { Catalog } from './catalog.js';
import { usePlants } from './field.js';
import { harvestPlants } from './harvester.js';
import { createPlan } from './plan.js';
import { plantSeeds } from './tractor.js';

let yearlyPlan = createPlan();
let bastard = plantSeeds(yearlyPlan);
let currentField = usePlants(bastard);
let currentHarvest = harvestPlants(currentField);
Catalog(currentHarvest);


