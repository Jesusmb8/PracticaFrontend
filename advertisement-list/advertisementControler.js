import { pubSub } from "../pubSub.js";
import { buildSpinnerView, hideSpinner } from "../utils/spinner.js";
import { getAdvertisement } from "./advertisementModel.js";
import { buildAdvertisementView } from "./advertisementView.js";

export async function advertisementListController(advertisementListElement) {
    // Loading
    advertisementListElement.innerHTML = buildSpinnerView();
    // Modelo obtener anucios.
    try {
        const adverisements = await getAdvertisement();
        const notification = {
            message: 'Anuncios cargados correctamente',
            bgColor: 'bg-green'
        }
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, notification);
        // Pasar a la vista
        drawAdvertisement(adverisements, advertisementListElement);

    } catch (error) {
        const notification = {
            message: 'No ha sido posible cargar los anuncios.',
            bgColor: 'bg-red'
        }
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, notification);
    } finally {
        hideSpinner(advertisementListElement);
    }
}

function drawAdvertisement(advertisements, advertisementListElement) {
    for (const advertisement of advertisements) {
        const newAdvertisementElement = buildAdvertisementView(advertisement);
        advertisementListElement.appendChild(newAdvertisementElement);

    }
}

