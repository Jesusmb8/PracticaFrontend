import { notificationController } from "../notifications/notificationsController.js";
import { advertisementDetailController } from "./advertisementDetailController.js";


const advertisementDetailElement = document.querySelector('.advertisement-detail');
const notificationsElement = document.querySelector('.notifications');

const params = new URLSearchParams(window.location.search)
const adversimentId = params.get('advertisementId');

advertisementDetailController(advertisementDetailElement, adversimentId);
notificationController(notificationsElement);