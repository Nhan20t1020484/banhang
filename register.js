function validateForm() {
    const username = document.getElementById('reg-username').value.trim();
    const fullName = document.getElementById('full-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    // Reset errors
    document.querySelectorAll('.error-message').forEach(e => e.style.display = 'none');
    document.querySelectorAll('input').forEach(e => e.classList.remove('error'));

    if (!username) {
        isValid = false;
        document.getElementById('username-error').style.display = 'block';
        document.getElementById('reg-username').classList.add('error');
    }

    if (!fullName) {
        isValid = false;
        document.getElementById('full-name-error').style.display = 'block';
        document.getElementById('full-name').classList.add('error');
    }

    if (!phone) {
        isValid = false;
        document.getElementById('phone-error').style.display = 'block';
        document.getElementById('phone').classList.add('error');
    }

    if (!email) {
        isValid = false;
        document.getElementById('email-error').style.display = 'block';
        document.getElementById('email').classList.add('error');
    }

    if (!address) {
        isValid = false;
        document.getElementById('address-error').style.display = 'block';
        document.getElementById('address').classList.add('error');
    }

    if (!password) {
        isValid = false;
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('reg-password').classList.add('error');
    } else if (!/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}/.test(password)) {
        isValid = false;
        document.getElementById('password-error').style.display = 'block';
        document.getElementById('reg-password').classList.add('error');
    }

    if (password !== confirmPassword) {
        isValid = false;
        document.getElementById('confirm-password-error').style.display = 'block';
        document.getElementById('confirm-password').classList.add('error');
    }

    return isValid;
}

function register() {
    if (!validateForm()) {
        return;
    }

    const username = document.getElementById('reg-username').value.trim();
    const fullName = document.getElementById('full-name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('reg-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(user => user.username === username)) {
        alert('Tên đăng nhập đã tồn tại.');
        return;
    }

    users.push({ username, fullName, phone, email, address, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Đăng ký thành công!');
    window.location.href = 'login.html';
}
