


export function buildUserInfo(user) {
    const userInfoElement = document.createElement('div');
    userInfoElement.classList.add('user-info');

    userInfoElement.innerHTML = `
            <p> Welcome, ${user}</p>
    `;

    return userInfoElement;
}