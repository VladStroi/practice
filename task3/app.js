const input = document.querySelector('.input');

input.addEventListener('keydown', function enter(event) {
    if (event.keyCode === 13){
        let newDiv = document.createElement('div')
        newDiv.classList.add('newToDo')
        let newText = document.createTextNode(input.value)
        newDiv.appendChild(newText)
        document.body.appendChild(newDiv)
        input.value = ''
    }
})