export async function createUser(email, password) {
    const user = {
      username: email,
      password: password
    }

    const response = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    // gestionar la respuesta
    if (!response.ok) {
      throw new Error('Error al crear el usuario')
    }
  
  }