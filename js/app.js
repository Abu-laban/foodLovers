"use strict";

let formEl = document.getElementById('myForm');

let divEl = document.getElementById('tableContainer');

let tableEl = document.getElementById('tableCont');

let tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

let selectEl = document.getElementById('foodType');

let optionArr = ['shawarma','pizza','burger'];

function creatOptionEl(){

    for (let index = 0; index < optionArr.length; index++) {
        let optionEl = document.createElement('option');
        selectEl.appendChild(optionEl);

        optionEl.textContent = optionArr[index];
        optionEl.value = optionArr[index];
        
    }

}
creatOptionEl();

let foods = [];

function Food(customerName,foodType,foodImg){
    this.customerName = customerName;
    this.foodType = foodType;
    this.foodImg = foodImg;
    foods.push(this);

    setItem();

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  formEl.addEventListener('submit',handelSubmit);

  function handelSubmit(event){
    event.preventDefault();

    let inputEl1 = event.target.customerName.value;
    let inputEl2 = event.target.foodType.value;
    let inputEl3 = event.target.foodType.value;

    new Food(inputEl1,inputEl2,inputEl3);

    render();
  }

  function render(){

    tableBodyEl.textContent='';

    for (let index = 0; index < foods.length; index++) {
        
        let tableRowEl = document.createElement('tr');
        tableBodyEl.appendChild(tableRowEl);

        let tableDataEl1 = document.createElement('td');
        tableRowEl.appendChild(tableDataEl1);

        let imgEl = document.createElement('img');
        tableDataEl1.appendChild(imgEl);

        imgEl.src="img/" + foods[index].foodType + ".jpg";

        let tableDataEl2 = document.createElement('td');
        tableRowEl.appendChild(tableDataEl2);

        let pEl1 = document.createElement('p');
        tableDataEl2.appendChild(pEl1);

        pEl1.textContent = `Customer Name: ${foods[index].customerName}`;

        let pEl2 = document.createElement('p');
        tableDataEl2.appendChild(pEl2);

        pEl2.textContent = `Food Type: ${foods[index].foodType}`;

        let pEl3 = document.createElement('p');
        tableDataEl2.appendChild(pEl3);

        pEl3.textContent = `Food Price: ${getRndInteger(5, 40)}`;

    }
  }

  function setItem(){
      let data = JSON.stringify(foods);
      localStorage.setItem('Foods',data);
  }

  function getItem(){
    let stringObj = localStorage.getItem('Foods');
    let normalObj = JSON.parse(stringObj);

    if(normalObj !== null){
        foods = normalObj;
    }
    render();
  }
  getItem();