const accardion = document.querySelector('.accardion');
const title = document.querySelectorAll('.title')

title.forEach(btn => {
    btn.addEventListener('click', () => {
        let text = btn.nextElementSibling
        console.log(text);
        if (text.style.maxHeight){
            text.style.maxHeight = null

        } else {
            text.style.maxHeight = text.scrollHeight + 'px'
        }
    })
});