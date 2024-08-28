async function registerUser(user) {
    console.log('Registering user:', user);
    try {
        const response = await fetch('http://localhost:4000/api/usuarios', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // Aquí se envía el objeto user directamente en lugar de anidarlo en otro objeto
            body: JSON.stringify(user)  
        });

        console.log(response);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log('User registered successfully:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

const test = async () => {
    console.log('Testing users controller');

    try {
        const response = await fetch('http://localhost:4000/api/prueba', {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.text();
        console.log('Server response:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};


const testUsuarios = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/usuarios/test', {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.text();
        console.log('Server response:', data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};

export {
    registerUser,
    test,
    testUsuarios
}
