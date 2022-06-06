const check = document.querySelector('.check');
const input = document.querySelector('.input');
const newToDo = document.querySelector('.newToDo');

console.log(check);
console.log(input);
console.log(newToDo);

input.addEventListener('keydown', function enter(event) {
    if (event.keyCode === 13){
        document.body.appendChild(document.createElement('div').innerHTML = input.value)
    }
})