


export const harvestPlants = (plantsArray) => {
    let returnedHarvest = [];

    for (const plants of plantsArray) {
        if (plants.type === "Corn") {
            for (let i = (plants.output / 2); i > 0; i--) {
                returnedHarvest.push(plants);
            }
        }
        else{
            for (let i = plants.output; i > 0; i--){
                returnedHarvest.push(plants);
            }
        }
    }
    return returnedHarvest;
}