document.addEventListener("DOMContentLoaded", () => {
    const count = document.querySelector('#count input');
    
    document.querySelector('#decrease').addEventListener('click', () => {
        if(!(Number(count.value) <= 1)){
            count.value--;
        }
    });
    document.querySelector('#increase').addEventListener('click', () => {
        count.value++;
    });

    const sizes = document.querySelectorAll('.size');

    sizes.forEach((size) => {
        size.addEventListener('click', () => {
            if(size.classList.contains('size-checked')) {
                size.classList.remove('size-checked');
            }
            else {
                sizes.forEach((elm) => {
                    elm.classList.remove('size-checked');
                })

                size.classList.add('size-checked')
            }
        });
    });

    document.querySelector("#add-to-cart").addEventListener('click', (event) => {
        
        event.preventDefault();

        try {
            const size = document.querySelector('.size-checked').innerHTML;
            const count = document.querySelector('#count > input').value;
            const number = document.querySelector('#product-info > p').innerHTML;
            const name = document.querySelector('#product-info > h2').innerHTML;
            const price = document.querySelector('#product-info p:nth-child(3)');
            const image = document.querySelector('#images img').src;

            let resultPrice = '';

            if (price.classList.contains('sale-price')) {
                resultPrice = price.innerHTML.replace('<span style="text-decoration:line-through; color: black;">120лв.</span> ', '');
            }
            else {
                resultPrice = price.innerHTML;
            }

            const product = {
                size: size,
                count: count,
                number: number,
                name: name,
                price: resultPrice.replace('лв', ''),
                image: image
            }

            let products = JSON.parse(sessionStorage.getItem('products')) || [];

            products.push(product);

            sessionStorage.setItem('products', JSON.stringify(products));

            window.location.href = 'cart.html';
        } catch (error) {
            alert('Избери размер');
            console.log(`Error: ${error}`);
        }

    });
});