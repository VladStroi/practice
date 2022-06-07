const input = document.querySelector('.input');

input.addEventListener('keydown', function enter(event) {
    if (event.keyCode === 13){
        let newDiv = document.createElement('div')
        newDiv.classList.add('newToDo')
        let newText = document.createTextNode(input.value)
        newDiv.appendChild(newText)
        document.body.appendChild(newDiv)
        let newToDo = document.getElementsByClassName('newToDo')
        console.log(newToDo);
        let checkbox = document.createElement("input")
        console.log(checkbox);
        // newToDo.insertBefore(checkbox, newToDo.firstChild)
        // checkbox.type ="checkbox"
        input.value = ''
    }
})