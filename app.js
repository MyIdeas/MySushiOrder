document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginStatus = document.getElementById('login-status');
    const userInfo = document.getElementById('user-info');
    const userName = document.getElementById('user-name');
    const logoutButton = document.getElementById('logout-button');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Esempio di verifica dell'autenticazione (sostituire con la tua logica)
        if (username === 'utente' && password === 'password') {
            loginStatus.textContent = 'Accesso consentito';
            userInfo.style.display = 'block';
            userName.textContent = username;
            loginForm.style.display = 'none';
        } else {
            loginStatus.textContent = 'Accesso negato. Riprova.';
        }
    });

    logoutButton.addEventListener('click', function () {
        loginForm.style.display = 'block';
        userInfo.style.display = 'none';
        loginStatus.textContent = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    });
});
