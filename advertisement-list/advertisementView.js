export function buildAdvertisementView(advertisement){
    const newAdvertisementElement = document.createElement('advertisement');
    newAdvertisementElement.classList.add('advertisement');

    newAdvertisementElement.innerHTML=`
        <a href="/advertisementDetail.html?advertisementId=${advertisement.id}">
            <h2>${advertisement.descripcion}</h2>
            <h3>${advertisement.precio}</h3>
            <img alt="Imagen anuncio" class="img-advertisement" src=${advertisement.imagen}>
        </a>
    `;

    return newAdvertisementElement;
}