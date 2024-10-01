// Función para registrar un nuevo usuario
function registerUser() {
    let email = document.getElementById('newEmail').value;
    let password = document.getElementById('newPassword').value;
    let message = document.getElementById('registerMessage');

    // Verificar si el usuario ya existe
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let userExists = users.some(user => user.email === email);

    if (userExists) {
        message.style.color = 'red';
        message.textContent = 'Este usuario ya existe. Intenta con otro correo.';
    } else {
        // Registrar el nuevo usuario
        users.push({ email: email, password: password });
        localStorage.setItem('users', JSON.stringify(users));
        message.style.color = 'green';
        message.textContent = 'Usuario registrado con éxito.';
    }
}

// Función para iniciar sesión
function loginUser() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    let message = document.getElementById('loginMessage');

    // Obtener usuarios registrados
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Verificar si el usuario y la contraseña son correctos
    let validUser = users.find(user => user.email === email && user.password === password);

    if (validUser) {
        message.style.color = 'green';
        message.textContent = 'Inicio de sesión exitoso.';
    } else {
        message.style.color = 'red';
        message.textContent = 'Correo o contraseña incorrectos.';
    }
}
