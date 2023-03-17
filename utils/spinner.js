export function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`

}

export function hideSpinner(tweetListElement) {
    const spinnerElement = tweetListElement.querySelector('.spinner');
    spinnerElement.classList.add('hide');
}