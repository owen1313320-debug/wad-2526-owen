
let cart = [];

loadCart();

function loadCart() {

    const params = new URLSearchParams(window.location.search);

    cart = JSON.parse(params.get('cart'));

    let display = '';

    let grandTotal = 0;

    let totalQty = 0;

    for (let i = 0; i < menus.length; i++) {

        const menu = menus[i];

        for (let j = 0; j < menu.variants.length; j++) {

            const variant = menu.variants[j];

            const qty = cart[i][j];

            if (qty > 0) {

                const subtotal = qty * variant.price;

                grandTotal += subtotal;

                totalQty += qty;

                display += `

                    <div class="order-item">

                        <div class="item-name">
                            ${menu.name} (${variant.description})
                        </div>

                        <div class="item-detail">

                            <span>
                                ${qty} x ${variant.price.toLocaleString()}
                            </span>

                            <span>
                                ${subtotal.toLocaleString()}
                            </span>

                        </div>

                    </div>

                `;
            }
        }
    }

    document.getElementById('cart').innerHTML = display;

    document.getElementById('grand-total').innerHTML =
        grandTotal.toLocaleString();

    document.getElementById('total-qty').innerHTML =
        `${totalQty} Total`;
}