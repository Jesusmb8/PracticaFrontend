import { pubSub } from "../pubSub.js";
import { buildNotificationView } from "./notificationsView.js";


export function notificationController(notificationElement) {
    function showNotification(message) {
        notificationElement.innerHTML = buildNotificationView(message);
        setTimeout(() => {
            notificationElement.innerHTML = '';
        }, 6000);
    }

    pubSub.subscribe(pubSub.TOPICS.SHOW_NOTIFICATION, (message) => {
        showNotification(message);
    })
    return showNotification;
}