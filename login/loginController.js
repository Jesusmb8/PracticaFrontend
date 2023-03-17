import { pubSub } from "../pubSub.js";
import { isEmailValid } from "../utils/isEmailValid.js";
import { loginModel } from "./loginModel.js";


export function loginController(loginForm) {


    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const emailElement = loginForm.querySelector('#user');

        if (!isEmailValid(emailElement.value)) {
            pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
                message: 'El email introducido no es válido',
                bgColor: 'bg-red'
            })
        } else {
            loginUser(loginForm);
        }
    })
}

async function loginUser(loginForm) {
    const formData = new FormData(loginForm);
    const user = formData.get('user');
    const pass = formData.get('password');

    try {
        const token = await loginModel(user, pass);
        localStorage.setItem('token', token);
        window.location= '/';

    } catch (error) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
            message: error.message,
            bgColor: 'bg-red'
        })
    }
}