import { getAdvertisement } from "./advertisementModel.js";
import { buildAdvertisementView } from "./advertisementView.js";

export async function advertisementListController(advertisementListElement){
    // Modelo obtener anucios.
    const adverisements = await getAdvertisement();
    // Pasar a la vista
    drawAdvertisement(adverisements,advertisementListElement)
    
    advertisementListElement.appendChild(newAdvertisementElement);
    
}

function drawAdvertisement(advertisements,advertisementListElement){
    for (const advertisement of advertisements) {
        const newAdvertisementElement = buildAdvertisementView(advertisement);
        advertisementListElement.appendChild(newAdvertisementElement);
        
    }
}