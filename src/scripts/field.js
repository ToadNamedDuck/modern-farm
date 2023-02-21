let plantsInField = [];


//addPlant is mostly invokes in tractor.js
export const addPlant = (seed) => {
    if(Array.isArray(seed)){//If seed is an array and not an object (corn use case), it pushes both objects in the corn array. 
    plantsInField.push(seed[0]);
    plantsInField.push(seed[1]);
    }
    else{
        plantsInField.push(seed);//Otherwise, it just adds the seed object to the plantsInField array.
    }
}

export const usePlants = () => {//This function returns a copy of the plantsInField array. It does not populate that array.
    const copyOfField = plantsInField;//It is only really useful after addPlant has been invokes.
    return copyOfField;
}