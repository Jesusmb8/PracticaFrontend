import { notificationController } from "../notifications/notificationsController.js";
import { loginController } from "./loginController.js";


const loginForm = document.querySelector('#loginUser');
const notificationsElement = document.querySelector('.notifications');

loginController(loginForm);
notificationController(notificationsElement);