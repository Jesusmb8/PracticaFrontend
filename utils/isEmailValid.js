export function isEmailValid(email) {
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if (!mailRegExp.test(email)) {
        pubSub.publish(pubSub.TOPICS.SHOW_NOTIFICATION, {
            message: 'El email no es válido',
            bgColor: 'bg-red'
        })
        return false
    }

    return true
}
