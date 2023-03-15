import { notificationController } from "../notifications/notificationsController.js";
import { signupController } from "./signupController.js";


const singupForm = document.querySelector('#newUser');
const notificationsElement = document.querySelector('.notifications')

notificationController(notificationsElement)

signupController(singupForm);