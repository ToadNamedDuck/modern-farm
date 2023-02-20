export const Catalog = (harvestedFood) => {
    let HTMLstring = ``;
    for(const item of harvestedFood){
        HTMLstring += `<section class="plant">${item.type}</section>`
    }

    const HTMLInjector = document.querySelector(".container");
    HTMLInjector.innerHTML = HTMLstring;
}