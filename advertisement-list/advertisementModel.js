

export async function getAdvertisement(){
    const endpoint= 'http://localhost:8000/api/advertisement';

    const response = await fetch(endpoint);
    const adverisements = await response.json();

    return adverisements;

}