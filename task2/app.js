const accardion = document.querySelector('.accardion');
const part = document.querySelectorAll('.part')

console.log(part);

const tapTitle = () => {
    part.forEach((el) => {
        console.log(el.querySelector('.text'));
        console.log(el.querySelector('.title'));

    })
}

tapTitle()