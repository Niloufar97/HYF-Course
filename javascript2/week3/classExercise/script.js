// const counterContainer = document.getElementById('counter-container');
// const resetBtn = document.getElementById('reset');
// const increaseBtn = document.getElementById('increase');
// const decreaseBtn = document.getElementById('decrease');
// const delayIcrease = document.getElementById('delayIncrease')
const buttonOne = document.getElementById('btn1');
const buttonTwo = document.getElementById('btn2');
let count = 0 ;
function countUp () {
    console.log(count);
    count++;
}
buttonOne.addEventListener('click' , countUp)
buttonTwo.addEventListener('click', countUp)

// let number= 0;
// update()

// increaseBtn.addEventListener('click' ,() => {
//     number++;
//     update();
// });
// decreaseBtn.addEventListener('click' , ()=>{
//     number--;
//     update();
// });

// resetBtn.addEventListener('click' , ()=>{
//     number = 0;
//     update();
// });

// delayIcrease.addEventListener('click' , () => {
//     setTimeout(() => {
//         number++;
//         update();
//     }, 2000)
// })

// function update () {
//     counterContainer.innerText = number;
// };

