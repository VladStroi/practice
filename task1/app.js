const main = document.querySelector('.main');
const nav = main.querySelector('.nav').children
const text = main.querySelector('.mainText').children


function nextTab(btn){
    btn.addEventListener('click', () => {
        for (let textOf of text){

            textOf.classList.remove('active');
            console.log('test');
        }
        document.getElementById(btn.dataset.name).classList.add('active')
        console.log(btn.dataset.name);
    })
}

for (let btn of nav){
    
    nextTab(btn);
}
