


export const harvestPlants = (plantsArray) => {
    let returnedHarvest = [];//Create new empty array

    for (const plants of plantsArray) {//iterate through the provided argument array
        if (plants.type === "Corn") {//Case for Corn
            for (let i = (plants.output / 2); i > 0; i--) {//for loop which runs half the number of plants.output key (because this is for corn)
                returnedHarvest.push(plants);//adds a corn object to the returnedHarvest array. Once per cycle
            }
        }
        else{//Case for everything else
            for (let i = plants.output; i > 0; i--){//for loop which runs based on the whole plants.output key.
                returnedHarvest.push(plants);//adds a copy of the plant to the returnedHarvest array. Happens once per cycle.
            }
        }
    }
    return returnedHarvest;
}