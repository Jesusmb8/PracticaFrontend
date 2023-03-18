
export const buildAdvertisementDetailView = (advertisementData) => {
    const newAdvertisementElement = document.createElement('advertisementDetail');
    newAdvertisementElement.classList.add('advertisementDetail');

    newAdvertisementElement.innerHTML = `
        <div>
            <h1>${advertisementData.nombre}</h1>
            <h2>${advertisementData.descripcion}</h2>
            <h3>${advertisementData.precio}</h3>
            <h5>${advertisementData.tipo}</h5>
            <p>${advertisementData.userId}</p>
            <img alt="Imagen anuncio" class="img-advertisement" src=${advertisementData.imagen}>
            <button id="deletAd">Eliminar anuncio</button>
        </div>
    `;

    return newAdvertisementElement;
}