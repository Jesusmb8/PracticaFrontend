import { pubSub } from "../pubSub.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { createUser } from "./singupModel.js";

export function signupController(singupForm) {


    singupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        const emailElement = singupForm.querySelector('#user');
        const passwElement = singupForm.querySelector('#password');
        const passwConfirmElement = singupForm.querySelector('#passwordConfirm');
        if (isEmailValid(emailElement.value) &&
            isPasswordValid(passwElement.value, passwConfirmElement.value)) {
            try {
                await createUser(emailElement.value, passwElement.value);
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
                    message: 'El usuario ha sido creado',
                    bgColor: 'bg-green'
                })
            } catch (error) {
                pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
                    message: 'El usuario no ha sido creado: ' + error.message,
                    bgColor: 'bg-red'
                })
            }finally{
                setTimeout(() => window.location = "/", 5000);
            }

        }
    })
}

function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
            message: 'Las contraseñas no son iguales',
            bgColor: 'bg-red'
        })
        return false
    }

    return true
}