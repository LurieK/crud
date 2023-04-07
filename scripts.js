const formWork = document.getElementById('form-work')
const formLife = document.getElementById('form-life')
const formJoy = document.getElementById('form-joy')
const ulWork = document.getElementById('work')
const ulLife = document.getElementById('life')
const ulJoy = document.getElementById('joy')
const clearWork = document.getElementById('work-button')
const clearLife = document.getElementById('life-button')
const clearJoy = document.getElementById('joy-button')
const workInput = document.getElementById('work-item')
const lifeInput = document.getElementById('life-item')
const joyInput = document.getElementById('joy-item')


//function to create work list
const liMaker1 = (text) =>{
    const li= document.createElement('li');
    li.textContent = text;
    ulWork.appendChild(li)

}

formWork.addEventListener('submit', function(e){
    e.preventDefault();

    liMaker1(workInput.value)
    workInput.value = '';
 
})

//function to create life list

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
