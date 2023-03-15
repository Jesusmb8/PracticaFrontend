import { advertisementListController } from "./advertisement-list/advertisementControler.js";
import { notificationController } from "./notifications/notificationsController.js";


const advertisementListElement = document.querySelector('.advertisement-list');
const notificationsElement = document.querySelector('.notifications');

advertisementListController(advertisementListElement);
notificationController(notificationsElement);