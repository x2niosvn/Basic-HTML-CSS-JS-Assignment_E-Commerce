const products = [
    {
        id: 1,
        title: "ASUS ROG Matrix GeForce RTX 4090 Platinum 24GB GDDR6X",
        price: 4999.99,
        img: "../assets/products/vga1.webp",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    },
    {
        id: 2,
        title: "MSI GeForce RTX 4090 SUPRIM LIQUID 24G",
        price: 3999.99,
        img: "../assets/products/vga2.webp",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    },
    {
        id: 3,
        title: "GIGABYTE AORUS GeForce RTX 4080 XTREME WB 16GB",
        price: 2000.00,
        img: "../assets/products/vga3.webp",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    },
    {
        id: 4,
        title: "ASUS TUF Gaming GeForce RTX 4090 OC Edition 24GB",
        price: 1800.00,
        img: "../assets/products/vga4.webp",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    },
    {
        id: 5,
        title: "Laptop gaming ASUS ROG Flow Z13 GZ301VU MU301W",
        price: 2000.00,
        img: "../assets/products/lap1.webp",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    },
    {
        id: 6,
        title: "Laptop gaming ASUS ROG Strix G16 G614JV N4261W",
        price: 1700.00,
        img: "../assets/products/lap2.webp",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    },
    {
        id: 7,
        title: "Laptop gaming Acer Nitro 16 Phoenix AN16 41 R3SM",
        price: 1500.00,
        img: "../assets/products/lap3.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    },
    {
        id: 8,
        title: "Laptop gaming Acer Predator Helios Neo 16 PHN16 71 53M7",
        price: 1500.00,
        img: "../assets/products/lap4.png",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores non eligendi itaque amet facilis fuga, libero sit fugiat temporibus delectus odio expedita incidunt quasi, eos cum quam. Perferendis, illo totam!"
    } 
];

let productClass = Array.from(document.getElementsByClassName('product'));

function devolveObj(index) {
    let choosenProduct = products[index];

    localStorage.setItem('tenis', JSON.stringify(choosenProduct)); 
    window.location.href = '/pages-html/sproduct.html';
}

/*Product Cart*/

const removeProductIcons = document.getElementsByClassName('remove-icon'); 

for(let i = 0; i < removeProductIcons.length; i++) { 
    removeProductIcons[i].addEventListener('click', function(event) {
        event.target.parentElement.parentElement.parentElement.remove();
        updateTotal();
    });
}  

function updateTotal() {
    let totalAmount = 0;
    const cartProducts = document.getElementsByClassName('cart-product');

    for(let i = 0; i < cartProducts.length; i++) {
        const productPrice = cartProducts[i].getElementsByClassName('cart-product-price')[0].innerText.replace('$', '').replace(',', '.');
        const productQuantity = cartProducts[i].getElementsByClassName('cart-product-quantity')[0].value;

        totalAmount += productPrice * productQuantity;
    }
    totalAmount = totalAmount.toFixed(2);
    totalAmount = totalAmount.replace('', '$ ').replace('.', ',');
    document.getElementById('total-amount').innerText = totalAmount;
}

const quantityInputs = document.getElementsByClassName('cart-product-quantity');
for(let i = 0; i < quantityInputs.length; i++) {
    quantityInputs[i].addEventListener('change', updateTotal);
}

const cartButton = document.getElementsByClassName('cart');
for(let i = 0; i < cartButton.length; i++) {
    cartButton[i].addEventListener('click', addProductToCart);
}


/*Product Cart*/







