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
});