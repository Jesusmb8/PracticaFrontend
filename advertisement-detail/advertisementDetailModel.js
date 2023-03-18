export const getAdvertisementById = async (advertisementId) => {
    const response = await fetch(`http://localhost:8000/api/advertisement/${advertisementId}`)

    if (!response.ok) {
        throw new Error('El anuncio indicado no existe')
    }

    const tweet = await response.json();

    return tweet;
}

export const deleteAdvertisementById = async (advertisementId) => {
    const token = localStorage.getItem('token')

    const response = await fetch(`http://localhost:8000/api/advertisement/${advertisementId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        }
    });
    if (!response.ok) {
        throw new Error('El anuncio no se ha eliminado.')
    }

    return true;

}
