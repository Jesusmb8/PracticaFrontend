import { newAdvertisementController } from "./newAdvertisementController.js";
import { notificationController } from "../notifications/notificationsController.js";
import { pubSub } from "../pubSub.js";


const notificationsElement = document.querySelector('.notifications');
notificationController(notificationsElement);

const token = localStorage.getItem('token');
if (token) {
    const newAdvertisementForm = document.querySelector('#newAdvertisement');
    newAdvertisementController(newAdvertisementForm);
} else {
    pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
        message: 'Debe registrarse para poder publicar un anucio',
        bgColor: 'bg-red'
    });
    setTimeout(() => window.location = "/", 5000);
}