
export const buildAdvertisementDetailView = (advertisementData) => {
    const newAdvertisementElement = document.createElement('div');
    newAdvertisementElement.classList.add('advertisement-detail');
    const tipoText = advertisementData.tipo === 'venta' ? 'Se vende' : 'Se compra' ;

    newAdvertisementElement.innerHTML = `
            <h1>${advertisementData.nombre}</h1>
            <img alt="Imagen anuncio" class="img-advertisement" src=${advertisementData.imagen}>
            <div>
            <span>${advertisementData.precio} €</span>
            <span class=${advertisementData.tipo}>${tipoText}</span>
            </div>
            <p class="description">${advertisementData.descripcion}</p>
            <button id="deletAd">Eliminar anuncio</button>
    `;

    return newAdvertisementElement;
}