export const Catalog = (harvestedFood) => {//Builds the HTML string to inject.
    let HTMLstring = ``;//Create empty string.
    for(const item of harvestedFood){//for ... of loop which cycles through every object in the array which is accepted as an argument.
        HTMLstring += `<section class="plant">${item.type}</section>`//creates a section tag with the item.type in the middle (plant name) and closes the tag, adds to HTMLstring
    }

    const HTMLInjector = document.querySelector(".container");//const variable declaration. Finds the .container selector in the HTML document.
    HTMLInjector.innerHTML = HTMLstring;//Sets the innerHTML of the HTMLInjector variable (which is the .container selector) to the HTMLstring we created.
}