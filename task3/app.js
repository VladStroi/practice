const input = document.querySelector('.input');
const check = document.querySelector('.check')

const addTestDiv = str => {
    
    const el = document.createElement('div');
    el.classList.add('newToDo')
    el.innerHTML = str;
    
    return check.appendChild(el);
}

const done = e => {
    if (e.target.className === 'checkbox'){
        e.target.style.display = "none";
        e.target.nextSibling.style.textDecoration = 'line-through';
    };
}

const deleted = e => {
    if (e.target.className === 'clean'){
        e.target.parentElement.remove()
    }
}


input.addEventListener('keydown', function enter(event) {
    if (event.keyCode === 13){
        addTestDiv(
            `<input type="checkbox" class="checkbox">
            <div class="textDiv"></div>
            <div class="clean">×</div>`
            )
            let text = document.querySelectorAll('.textDiv')
            text[text.length - 1].appendChild(document.createTextNode(input.value))
            input.value = '';
        }
    })

check.addEventListener('click', done)

check.addEventListener('click', deleted)
