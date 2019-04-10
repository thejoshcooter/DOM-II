// Your code goes here

document.querySelector('.logo-heading').addEventListener('mouseover', (event) => { 
    event.currentTarget.innerHTML = 'Fun Bus!!!'
    event.currentTarget.style.color = 'orange';
});

const container = document.querySelector('html')
document.addEventListener('wheel', () => {
    container.style.backgroundColor = '#ffdae0';
});

document.addEventListener('scroll', () => {
    container.style.backgroundColor = '#ffedcc';
});

const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => { btn.addEventListener('click', () => {
    window.alert('SUCCESS!');
})});

const inputs = document.querySelectorAll('.input');
inputs.forEach((input) => { 
    input.addEventListener('focus', (event) => {
        event.currentTarget.style.color = '#9400D3';
    });
    
    input.addEventListener('keydown', (event) => {
        console.log('keydown success');
    });
    
    input.addEventListener('blur', (event) => {
        event.currentTarget.style.color = '#ae3030';
    });
});

const nav = document.querySelector('nav');
    window.addEventListener('resize', () => {
        nav.classList.toggle('reverse');
});