const game = document.querySelector('.game')

const winCombo = [
    [0, 1, 2], 
	[3, 4, 5], 
	[6, 7, 8], 
	[0, 3, 6], 
	[1, 4, 7], 
	[2, 5, 8], 
	[0, 4, 8], 
	[2, 4, 6]
];

const comboX = [];

const comboO = [];

let value = 'X'

game.addEventListener('click', function(e){
    
    if (value == 'X'){
        e.target.innerHTML = 'X';
        comboX.push(e.target.dataset.num);
        value = 'O';
        console.log(comboX);
    } 
    else if (value == 'O'){
        e.target.innerHTML = 'O';
        comboO.push(e.target.dataset.num);
        console.log(comboO);
        value = 'X';
    }

})