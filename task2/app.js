const accardion = document.querySelector('.accardion');
const title = document.querySelectorAll('.title')


// const tapTitle = (event) => {
//     if (event.target.nextElementSibling.className == 'text active'){
//         event.target.nextElementSibling.classList.remove('active')
//     } else {
//         event.target.nextElementSibling.classList.add('active')
//     }
//     console.log(event.target.nextElementSibling.className);
// }

title.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.nextElementSibling.className);
        if (btn.nextElementSibling.className == 'text active'){
            btn.nextElementSibling.style.transition = '0.5s';
            btn.nextElementSibling.classList.remove('active')
        } else {
            btn.nextElementSibling.style.transition = '0.5s';
            btn.nextElementSibling.classList.add('active')
        };
    })
})

title.ch