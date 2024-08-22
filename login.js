function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html';
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}
