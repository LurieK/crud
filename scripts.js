
//function to create work list
const formWork = document.getElementById('form-work')
const ulWork = document.getElementById('work')
const clearWork = document.getElementById('work-button')
const workInput = document.getElementById('work-item')

let workItemsArray = []

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

//function to create life list
const formLife = document.getElementById('form-life')
const ulLife = document.getElementById('life')
const clearLife = document.getElementById('life-button')
const lifeInput = document.getElementById('life-item')

const liMaker2 = (text) =>{
    const li= document.createElement('li');
    li.textContent = text;
    ulLife.appendChild(li)

}

formLife.addEventListener('submit', function(e){
    e.preventDefault();

    liMaker2(lifeInput.value)
    lifeInput.value = '';
 
})

//function for joy list
const formJoy = document.getElementById('form-joy')
const ulJoy = document.getElementById('joy')
const clearJoy = document.getElementById('joy-button')
const joyInput = document.getElementById('joy-item')

const liMaker3 = (text) =>{
    const li= document.createElement('li');
    li.textContent = text;
    ulJoy.appendChild(li)

}

formJoy.addEventListener('submit', function(e){
    e.preventDefault();

    liMaker3(joyInput.value)
    joyInput.value = '';
 
})






