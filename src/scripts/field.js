let plantsInField = [];

export const addPlant = (seed) => {
    if(Array.isArray(seed)){
    plantsInField.push(seed[0]);
    plantsInField.push(seed[1]);
    }
    else{
        plantsInField.push(seed);
    }
}

export const usePlants = () => {
    const copyOfField = plantsInField;
    return copyOfField;
}