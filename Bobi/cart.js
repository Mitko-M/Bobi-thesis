const products = JSON.parse(sessionStorage.getItem('products'));

if (products) {
  let price = 0;

  const cart = document.querySelector('#products');
  cart.innerHTML = '';
  products.forEach(element => {
    console.log(element);
    
    price += Number(element.price) * Number(element.count);
    const wrapper = document.createElement('div');
    wrapper.classList.add('product-wrapper');
    
    const product = document.createElement('div');
    product.classList.add('product');
    const image = document.createElement('img');
    image.src = element.image;
    product.appendChild(image);

    const content = document.createElement('div');
    content.classList.add('product-content');

    const number = document.createElement('p');
    const name = document.createElement('h2');
    const size = document.createElement('p');
    const count = document.createElement('p');

    number.innerHTML = element.number;
    name.innerHTML = element.name;
    size.innerHTML = `Размер: ${element.size}`
    count.innerHTML = `Брой: ${element.count}`
    
    content.appendChild(number);
    content.appendChild(name);
    content.appendChild(size);
    content.appendChild(count);
    product.appendChild(content);
    wrapper.appendChild(product);
    cart.appendChild(wrapper);
  });
  const clearCart = document.createElement('a');
  clearCart.href = '#';
  clearCart.innerHTML = 'Изчисти количката'
  clearCart.classList.add('btn');
  clearCart.classList.add('btn-danger');
  cart.appendChild(clearCart);
  clearCart.addEventListener('click', (e) => {
    e.preventDefault();
    sessionStorage.clear();
    location.reload();
  });
  const cost1 = document.querySelector('#cost h1:nth-child(1)');
  const cost2 = document.querySelector('#cost h1:nth-child(3)');
  cost1.innerHTML = `Цена: ${price.toFixed(2)}лв`;
  cost2.innerHTML = `Общо: ${price.toFixed(2)}лв`;
}