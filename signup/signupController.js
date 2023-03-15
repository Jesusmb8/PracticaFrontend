import { pubSub } from "../pubSub.js";
import { createUser } from "./singupModel.js";

export function signupController(singupForm) {


    singupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const emailElement = singupForm.querySelector('#user');
        const passwElement = singupForm.querySelector('#password');
        const passwConfirmElement = singupForm.querySelector('#passwordConfirm');
        // TODO, COMPROBAR EMAIL y password
        if (true) {
            try {
                await createUser(emailElement.value, passwElement.value);
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
                    message: 'El usuario ha sido creado',
                    bgColor: 'bg-green'
                })
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
                    message: 'El usuario no ha sido creado',
                    bgColor: 'bg-red'
                })
            }

        }
    })
}