import { advertisementListController } from "./advertisement-list/advertisementControler.js";
import { notificationController } from "./notifications/notificationsController.js";
import { userActionController } from "./user-actions/userActionsController.js";


const advertisementListElement = document.querySelector('.advertisement-list');
const notificationsElement = document.querySelector('.notifications');
const userElement = document.querySelector('.user-actions');

advertisementListController(advertisementListElement);
notificationController(notificationsElement);
userActionController(userElement);