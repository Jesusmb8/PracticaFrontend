


export const createAdvertisement = async (newAdvertisementData) => {

    const token = localStorage.getItem('token')

    const response = await fetch('http://127.0.0.1:8000/api/advertisement', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(newAdvertisementData)
    })

    if (!response.ok) {
        throw new Error('Error al crear el anuncio,' + response.text);
    }

}