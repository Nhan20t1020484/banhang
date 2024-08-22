document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    const loginButton = document.getElementById('login-button');
    const usernameDisplay = document.getElementById('username-display');

    if (loggedInUser) {
        loginButton.textContent = 'Đăng Xuất';
        loginButton.onclick = logout;
        usernameDisplay.textContent = `Chào, ${loggedInUser}`;
    } else {
        loginButton.textContent = 'Đăng Nhập';
        loginButton.onclick = () => window.location.href = 'login.html';
        usernameDisplay.textContent = '';
    }
});

function addToCart(productName, productPrice) {
    const loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        alert('Bạn cần đăng nhập để tiếp tục mua hàng.');
        window.location.href = 'login.html';
        return;
    }

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Sản phẩm đã được thêm vào giỏ hàng!');
}

function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.reload();
}
