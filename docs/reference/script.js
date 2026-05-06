//PLAYER 1 - variables
const containerP1 = document.querySelector('.container-player-1')
const btnAddP1 = document.getElementById('addP1')
const btnRemoveP1 = document.getElementById('removeP1')
const box = containerP1.querySelectorAll('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6')
let counterP1 = 1
let boxIndexP1 = 0

//PLAYER 2 -variables
const containerP2 = document.querySelector('.container-player-2')
const btnAddP2 = document.getElementById('addP2')
const btnRemoveP2 = document.getElementById('removeP2')
const boxP2 = containerP2.querySelectorAll('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6')
let counterP2 = 1
let boxIndexP2 = 0

// PLAYER 1 - functions
btnAddP1.addEventListener('click', ()=>{
    if(counterP1 > 5){
        boxIndexP1++
        counterP1 = 1;
    }
    if(boxIndexP1 < box.length  ){
        box[boxIndexP1].insertAdjacentHTML('beforeend', createPointP1(counterP1));
        addTransitionP1(counterP1)     
    } 
    counterP1++
})

const addTransitionP1 = (counterP1) =>{
    const point = box[boxIndexP1].querySelector(`.point-${counterP1}`);
    if (point) {
        setTimeout(() => {
            point.classList.add("active");
        }, 50);
    }
} 

const createPointP1 = (counterP1) =>{
    let point = `<div class="point-${counterP1} desing"></div>`
    return point  
}
btnRemoveP1.addEventListener('click', () => {
    if (counterP1 > 1) {
        counterP1--; 
    } else if (boxIndexP1 > 0) {
        boxIndexP1--; 
        counterP1 = 5; 
    }
    const point = box[boxIndexP1].querySelector(`.point-${counterP1}`);
    if (point) {
        point.classList.remove("active");
        point.classList.add("unactive");

        setTimeout(() => {
            point.remove();
        }, 300);
    } else {
        console.error(`No se encontró .point-${counterP1} en .box-${boxIndexP1 + 1}`);
    }
});

//PLAYER 2 
btnAddP2.addEventListener('click', ()=>{
    if(counterP2 > 5){
        boxIndexP2++
        counterP2 = 1;
    }
    if(boxIndexP2 < boxP2.length  ){
        boxP2[boxIndexP2].insertAdjacentHTML('beforeend', createPointP2(counterP2));
        addTransitionP2(counterP2)     
    } 
    counterP2++
})
const addTransitionP2 = (counterP2) =>{
    const point = boxP2[boxIndexP2].querySelector(`.point-${counterP2}`);
    if (point) {
        setTimeout(() => {
            point.classList.add("active");
        }, 50);
    }
} 
const createPointP2 = (counter) =>{
    let point = `<div class="point-${counter} desing"></div>`
    return point  
}
btnRemoveP2.addEventListener('click', () => {
    if (counterP2 > 1) {
        counterP2--; 
    } else if (boxIndexP2 > 0) {
        boxIndexP2--; 
        counterP2 = 5; 
    }
    const point = boxP2[boxIndexP2].querySelector(`.point-${counterP2}`);
    if (point) {
        point.classList.remove("active");
        point.classList.add("unactive");

        setTimeout(() => {
            point.remove();
        }, 300);
    } else {
        console.error(`No se encontró .point-${counterP2} en .box-${boxIndexP2 + 1}`);
    }
});

//CARD ANIMATION
let card = document.querySelector('.card')
let btnCard = document.getElementById('close-popup')
let btnCardClose = document.querySelector('.popup-card')

const rotateCard = () =>{
    
    card.classList.add('flip')
    card.classList.add('show')
    
}
btnCard.addEventListener('click', ()=>{
    card.classList.remove('show')
    card.classList.add('close')
    btnCardClose.classList.add('close')
})






