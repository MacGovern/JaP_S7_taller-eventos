document.querySelector('div').addEventListener('click', () => {
    alert("Hola! Soy el div");
});

document.querySelector('button').addEventListener('click', (e) => {
    e.stopPropagation();
    alert("Hola!");
});