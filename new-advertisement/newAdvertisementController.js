import { pubSub } from "../pubSub.js";
import { buildSpinnerView, hideSpinner } from "../utils/spinner.js";
import { createAdvertisement } from "./createAdvertisement.js";


export async function newAdvertisementController(newAdvertisementFormElement) {
    newAdvertisementFormElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(newAdvertisementFormElement);
        newAdvertisementFormElement.innerHTML = buildSpinnerView();


        const newAdvertisementData = {
            imagen: formData.get('foto'),
            nombre: formData.get('nombre'),
            descripcion: formData.get('descripcion'),
            precio: formData.get('precio'),
            tipo: formData.get('tipo'),
        }
        console.log('data,', newAdvertisementData);

        try {
            await createAdvertisement(newAdvertisementData);
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
                message: 'El anuncio se ha creado correctamente',
                bgColor: 'bg-green'
            });
            setTimeout(() => window.location = "/", 5000);
        } catch (error) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
                message: error.message,
                bgColor: 'bg-red'
            })
        } finally {
            hideSpinner(newAdvertisementFormElement);
        }
    })
}
