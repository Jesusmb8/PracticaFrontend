export function buildAdvertisementView(advertisement){
    const newAdvertisementElement = document.createElement('advertisement');

    newAdvertisementElement.innerHTML=`
        <h2>${advertisement.descripcion}</h2>
        <h3>${advertisement.precio}</h3>
    `;

    return newAdvertisementElement;
}