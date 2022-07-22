const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.getElementById('cartWindow')


open.addEventListener("click", () => {
    container.classList.add("active");
})
close.addEventListener("click", () => {
    container.classList.remove("active");
})


window.addEventListener('DOMContentLoaded', () => {
    axios.get('http://localhost:3000/products')
        .then(data => console.log(data.data.products));
})