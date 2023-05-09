
//functions to create work list
const formWork = document.getElementById('form-work')
const ulWork = document.getElementById('work')
const clearWork = document.getElementById('work-button')
const workInput = document.getElementById('work-item')
const workEnter = document.getElementById('work-enter')

let workItemsArray = localStorage.getItem('work-items')
  ? JSON.parse(localStorage.getItem('work-items'))
  : []

localStorage.setItem('work-items', JSON.stringify(workItemsArray))
const data = JSON.parse(localStorage.getItem('work-items'))



const liMaker1 = (text) =>{
    //create li with a checkbox
    const li= document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';//changes adds the tag "type=checkbox" to the input
    checkBox.classList.add('checkbox'); //add class to checkbox so it can be edited in css
    //add both to the ul
    li.innerHTML = text;
    li.prepend(checkBox);
    ulWork.appendChild(li);
    //crossout li when the checkbox is clicked
    checkBox.addEventListener('click', function() {
        li.classList.toggle('checked');
    });
}

function addWorkItem() {
    workItemsArray.push(workInput.value);
    localStorage.setItem('work-items', JSON.stringify(workItemsArray));
    liMaker1(workInput.value);
    workInput.value = '';
  }
  
  formWork.addEventListener('submit', function(e){
    e.preventDefault();
    addWorkItem();
  });
  
//   workEnter.addEventListener('click', function(e) { 
//     e.preventDefault();
//     addWorkItem();
//   });
  



data.forEach((workItem)=>{
    liMaker1(workItem)
})




clearWork.addEventListener('click',function() {
    localStorage.removeItem('work-items');

    while (ulWork.firstChild) {
        ulWork.removeChild(ulWork.firstChild)
    }
})

//functions to create life list
const formLife = document.getElementById('form-life')
const ulLife = document.getElementById('life')
const clearLife = document.getElementById('life-button')
const lifeInput = document.getElementById('life-item')
const lifeEnter = document.getElementById('life-enter')

let lifeItemsArray = localStorage.getItem('life-items') ? JSON.parse(localStorage.getItem('life-items')) : []

localStorage.setItem('life-items', JSON.stringify(lifeItemsArray))
const data2 = JSON.parse(localStorage.getItem('life-items'))



const liMaker2 = (text) =>{
    //create li and checkbox
    const li= document.createElement('li');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';//label input type as checkbox
    checkBox.classList.add('checkbox');//add class to checkbox
    
    //add li and checkbox to ul
    li.innerHTML = text; 
    li.prepend(checkBox);
    ulLife.appendChild(li);
    
    //event listener for checkbox
    checkBox.addEventListener('click', function() {
        li.classList.toggle('checked')//adds class to box to change the css and cross out the li
    })

}




formLife.addEventListener('submit', function(e){
       
    e.preventDefault();

    lifeItemsArray.push(lifeInput.value);
    localStorage.setItem('life-items', JSON.stringify(lifeItemsArray))

    liMaker2(lifeInput.value)
    lifeInput.value = '';
    
})

data2.forEach((lifeItem)=> {
    liMaker2(lifeItem)
})

// lifeEnter.addEventListener('click', function(e) { 
//     e.preventDefault();
    
    
//     lifeItemsArray.push(lifeInput.value);
//     localStorage.setItem('life-items', JSON.stringify(lifeItemsArray));
  
//     liMaker2(lifeInput.value);
//     lifeInput.value = '';
 
// });

clearLife.addEventListener('click', function(){
    localStorage.removeItem('life-items');

    while(ulLife.firstChild) {
        ulLife.removeChild(ulLife.firstChild)
    }
})

//functions for joy list
const formJoy = document.getElementById('form-joy')
const ulJoy = document.getElementById('joy')
const clearJoy = document.getElementById('joy-button')
const joyInput = document.getElementById('joy-item')
const joyEnter = document.getElementById('joy-enter')

let joyItemsArray =localStorage.getItem('joy-items') ? JSON.parse(localStorage.getItem('joy-items')) : []

localStorage.setItem('joy-items', JSON.stringify(joyItemsArray))
const data3 = JSON.parse(localStorage.getItem('joy-items'))



const liMaker3 = (text) =>{
    const checkBox = document.createElement('input');
    const li= document.createElement('li');

    checkBox.type = 'checkbox';
    checkBox.classList.add('checkbox');

    li.innerHTML = text;
    li.prepend(checkBox);

    ulJoy.appendChild(li);

    checkBox.addEventListener('click', function(){
        li.classList.toggle('checked')
    })

};


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

// joyEnter.addEventListener('click', function(e) { 
//     e.preventDefault();
  
//     joyItemsArray.push(joyInput.value);
//     localStorage.setItem('joy-items', JSON.stringify(joyItemsArray));
  
//     liMaker3(joyInput.value);
//     joyInput.value = '';
//   });

clearJoy.addEventListener('click', function () {
    localStorage.removeItem('joy-items');

    while (ulJoy.firstChild){
        ulJoy.removeChild(ulJoy.firstChild)
    }
})





