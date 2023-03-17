import { notificationController } from "../notifications/notificationsController";
import { advertisementDetailController } from "./advertisementDetailController";


const advertisementDetailElement = document.querySelector('.advertisement-detail');
const notificationsElement = document.querySelector('.notifications');

advertisementDetailController(advertisementDetailElement);
notificationController(notificationsElement);