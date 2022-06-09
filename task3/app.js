const input = document.querySelector('.input');
const check = document.querySelector('.check')

input.addEventListener('keydown', function enter(event) {
    if (event.keyCode === 13){
        //new div TO DO
        const newDiv = document.createElement('div');
        newDiv.classList.add('newToDo');
        check.appendChild(newDiv);

        //new value input add in TO DO
        let newToDo = document.querySelectorAll('.newToDo');
        let newText = document.createTextNode(input.value);
        
        //new checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.classList.add('check')

        //add value input
        newToDo[newToDo.length - 1].appendChild(checkbox);
        newDiv.appendChild(newText);

        //add clean button
        let addCleanButton = document.createElement('div');
        addCleanButton.classList.add('clean');
        let cleanX = document.createTextNode('×')
        addCleanButton.appendChild(cleanX)
        newToDo[newToDo.length - 1].appendChild(addCleanButton);
        
        

        //clean value input
        input.value = '';
    }
})

function deleted(e) {
    if (e.target.className === 'check');
}

check.addEventListener('click', deleted)