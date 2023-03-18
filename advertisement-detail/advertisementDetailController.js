import { pubSub } from "../pubSub.js";
import { decodeToken } from "../utils/decodeToken.js";
import { buildSpinnerView, hideSpinner } from "../utils/spinner.js";
import { deleteAdvertisementById, getAdvertisementById } from "./advertisementDetailModel.js";
import { buildAdvertisementDetailView } from "./advertisementDetailView.js";


export async function advertisementDetailController(advertisementDetailElement, adversimentId) {

    advertisementDetailElement.innerHTML = buildSpinnerView();

    try {
        const advertisementDetail = await getAdvertisementById(adversimentId);

        advertisementDetailElement.appendChild(buildAdvertisementDetailView(advertisementDetail));
        const notification = {
            message: 'Anuncio cargado correctamente',
            bgColor: 'bg-green'
        }
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, notification);
        hadldleDeleteAdvertisementButton(advertisementDetailElement, advertisementDetail)

    } catch (error) {
        const notification = {
            message: error,
            bgColor: 'bg-red'
        }
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, notification);
    } finally {
        hideSpinner(advertisementDetailElement);
    }
}

function hadldleDeleteAdvertisementButton(advertisementDetailElement, advertisementDetail) {
    const token = localStorage.getItem('token');
    const deleteButtonElement = advertisementDetailElement.querySelector('#deletAd');

    if (!token) {
        deleteButtonElement.remove()
    } else {
        const userInfo = decodeToken(token);
        if (advertisementDetail.userId === userInfo.userId) {

            deleteButtonElement.addEventListener('click', async () => {
                const answer = confirm('El anuncio se eliminará. ¿Desea continuar?')
                if (answer) {
                    try {
                        await deleteAdvertisementById(advertisementDetail.id);
                        const notification = {
                            message: 'Anuncio eliminado correctamente',
                            bgColor: 'bg-green'
                        }
                        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, notification);
                        setTimeout(() => window.location = "/", 5000);
                    } catch (error) {
                        const notification = {
                            message: error,
                            bgColor: 'bg-red'
                        }
                        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, notification);
                    }
                }
            })
        } else {
            deleteButtonElement.remove()
        }
    }
}