document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Giỏ hàng trống</p>';
        totalElement.textContent = 'Tổng tiền: 0 ₫';
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        cartItemsContainer.innerHTML += `
            <div class="cart-item">
                <p>${item.name} - ${item.quantity} x ${item.price} ₫</p>
                <button onclick="removeItem('${item.name}')">Xóa</button>
                <button onclick="changeQuantity('${item.name}', -1)">-</button>
                <button onclick="changeQuantity('${item.name}', 1)">+</button>
            </div>
        `;
    });

    totalElement.textContent = `Tổng tiền: ${total} ₫`;
});

function removeItem(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

function changeQuantity(name, amount) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.name === name);

    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.name !== name);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        window.location.reload();
    }
}

function checkout() {
    alert('Thanh toán thành công!');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
}
