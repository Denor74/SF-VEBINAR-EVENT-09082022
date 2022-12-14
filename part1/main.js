let buttonEvent = document.querySelector('button');
buttonEvent.style.background = 'blue';
buttonEvent.style.color = 'white';
console.log(buttonEvent);

function foo () {
    console.log('click');
}

buttonEvent.addEventListener('click', (event) => {
    console.log(event);
});