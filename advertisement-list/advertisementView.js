export function buildAdvertisementView(advertisement){
    const newAdvertisementElement = document.createElement('advertisement');
    newAdvertisementElement.classList.add('advertisement');

    newAdvertisementElement.innerHTML=`
    <div>
        <a href="/advertisementDetail.html?advertisementId=${advertisement.id}">
            <h2>${advertisement.nombre}</h2>
            <img alt="Imagen anuncio" class="img-advertisement" src=${advertisement.imagen}>
            <h3 class=${advertisement.tipo}>${advertisement.precio} €</h3>
        </a>
    </div>
    `;

    return newAdvertisementElement;
}