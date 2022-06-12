const input = document.querySelector('.input');
const check = document.querySelector('.check')

input.addEventListener('keydown', function enter(event) {
    if (event.keyCode === 13){
        //new div TO DO
        const newToDoDiv = document.createElement('div');
        newToDoDiv.classList.add('newToDo');

        //add div for TO DO
        check.appendChild(newToDoDiv);
        
        //new div for text TO DO
        let newTextDiv = document.createElement('div')
        newTextDiv.classList.add('textDiv');
        
        //new checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox')
        
        //new clean button
        let addCleanButton = document.createElement('div');
        addCleanButton.classList.add('clean');
        let cleanX = document.createTextNode('×')
        addCleanButton.appendChild(cleanX)
        
        let newToDo = document.querySelectorAll('.newToDo');
        
        //add checkbox, div for text TO DO with value input and clean button
        newToDo[newToDo.length - 1].appendChild(checkbox);

        newToDoDiv.appendChild(newTextDiv);

        let newText = document.createTextNode(input.value);
        newTextDiv.appendChild(newText)

        newToDo[newToDo.length - 1].appendChild(addCleanButton);

        //clean value input
        input.value = '';
    }
})

function done(e) {
    if (e.target.className === 'checkbox'){
        e.target.style.display = "none";
        e.target.nextSibling.style.textDecoration = 'line-through';
    };
}

function deleted(e) {
    if (e.target.className === 'clean'){
        e.target.parentElement.remove()
        console.log();
    }
}

check.addEventListener('click', done)
check.addEventListener('click', deleted)