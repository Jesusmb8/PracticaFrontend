

export function userActionController(userElement){

    const token = localStorage.getItem('token');
    const closeElement = userElement.querySelector('#closeSession');

    if (token) {
        // Registrado
        const loginElement = userElement.querySelector('#login');
        const singupElement = userElement.querySelector('#signup');
        loginElement.remove();
        singupElement.remove();

        // TODO: poner mensaje personalizado para el usuario, a través del token.
        closeElement.addEventListener('click', ()=>{
            localStorage.removeItem('token');
            window.location.reload();
        })
    } else {
        const createAdvertisementElement = userElement.querySelector('#createAdvertisement');
        createAdvertisementElement.remove()
        closeElement.remove();
    }
} 