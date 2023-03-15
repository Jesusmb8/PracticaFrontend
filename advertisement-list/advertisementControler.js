import { pubSub } from "../pubSub.js";
import { getAdvertisement } from "./advertisementModel.js";
import { buildAdvertisementView } from "./advertisementView.js";

export async function advertisementListController(advertisementListElement){
    // Modelo obtener anucios.
    const adverisements = await getAdvertisement();
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION,'Anuncios cargados');
    console.log('Debería salir notification');
    // Pasar a la vista
    drawAdvertisement(adverisements,advertisementListElement)    
}

function drawAdvertisement(advertisements,advertisementListElement){
    for (const advertisement of advertisements) {
        const newAdvertisementElement = buildAdvertisementView(advertisement);
        advertisementListElement.appendChild(newAdvertisementElement);
        
    }
}