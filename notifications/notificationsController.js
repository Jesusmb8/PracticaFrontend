import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationsView.js";


export function notificationController(notificationElement) {
    function showNotification(dataNotification) {
        notificationElement.innerHTML = buildNotificationView(dataNotification.message);
        notificationElement.classList.add(dataNotification.bgColor);
        setTimeout(() => {
            notificationElement.innerHTML = '';
        }, 6000);
    }

    pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (dataNotification) => {
        showNotification(dataNotification);
    })
    return showNotification;
}