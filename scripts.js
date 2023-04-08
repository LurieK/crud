
//function to create work list
const formWork = document.getElementById('form-work')
const ulWork = document.getElementById('work')
const clearWork = document.getElementById('work-button')
const workInput = document.getElementById('work-item')

let workItemsArray = localStorage.getItem('work-items')
  ? JSON.parse(localStorage.getItem('work-items'))
  : []

localStorage.setItem('work-items', JSON.stringify(workItemsArray))
const data = JSON.parse(localStorage.getItem('work-items'))



const liMaker1 = (text) =>{
    const li= document.createElement('li');
    li.textContent = text;
    ulWork.appendChild(li)

}



formWork.addEventListener('submit', function(e){
    e.preventDefault();

    workItemsArray.push(workInput.value);
    localStorage.setItem('work-items', JSON.stringify(workItemsArray));

    liMaker1(workInput.value)
    workInput.value = '';
 
});

data.forEach((workItem)=>{
    liMaker1(workItem)
})

clearWork.addEventListener('click',function() {
    localStorage.clear();

    while (ulWork.firstChild) {
        ulWork.removeChild(ulWork.firstChild)
    }
})

//function to create life list
const formLife = document.getElementById('form-life')
const ulLife = document.getElementById('life')
const clearLife = document.getElementById('life-button')
const lifeInput = document.getElementById('life-item')

let lifeItemsArray = localStorage.getItem('life-items') ? JSON.parse(localStorage.getItem('life-items')) : []

localStorage.setItem('life-items', JSON.stringify(lifeItemsArray))
const data2 = JSON.parse(localStorage.getItem('life-items'))



const liMaker2 = (text) =>{
    const li= document.createElement('li');
    li.textContent = text;
    ulLife.appendChild(li)

}



formLife.addEventListener('submit', function(e){
    e.preventDefault();

    lifeItemsArray.push(lifeInput.value)
    localStorage.setItem('life-items', JSON.stringify(lifeItemsArray))

    liMaker2(lifeInput.value)
    lifeInput.value = '';
 
})

data2.forEach((lifeItem)=> {
    liMaker2(lifeItem)
})

clearLife.addEventListener('click', function(){
    localStorage.clear()

    while(ulLife.firstChild) {
        ulLife.removeChild(ulLife.firstChild)
    }
})

//function for joy list
const formJoy = document.getElementById('form-joy')
const ulJoy = document.getElementById('joy')
const clearJoy = document.getElementById('joy-button')
const joyInput = document.getElementById('joy-item')

let joyItemsArray =localStorage.getItem('joy-items') ? JSON.parse(localStorage.getItem('joy-items')) : []

localStorage.setItem('joy-items', JSON.stringify(joyItemsArray))
const data3 = JSON.parse(localStorage.getItem('joy-items'))



const liMaker3 = (text) =>{
    const li= document.createElement('li')

    li.textContent = text;
    ulJoy.appendChild(li)

}

formJoy.addEventListener('submit', function(e){
    e.preventDefault();

    joyItemsArray.push(joyInput.value)
    localStorage.setItem('joy-items', JSON.stringify(joyItemsArray))

    liMaker3(joyInput.value)
    joyInput.value = '';
 
})

data3.forEach((joyItem) =>{
    liMaker3(joyItem)
})

clearJoy.addEventListener('click', function () {
    localStorage.clear();

    while (ulJoy.firstChild){
        ulJoy.removeChild(ulJoy.firstChild)
    }
})





