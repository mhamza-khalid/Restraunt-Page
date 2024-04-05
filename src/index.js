console.log("Australia");
let contents = document.querySelector('#content');

let home = document.querySelector('#home');
let menu = document.querySelector('#menu')

import { loadPage } from "./initialLoad";
import { addMenu } from "./menu";
import './style.css';

window.addEventListener('load', ()=>{
    contents.textContent = '';  //wipe out page
    loadPage();
});

home.addEventListener('click', ()=>{
    contents.textContent = '';  //wipe out page
    loadPage();
})

menu.addEventListener('click', ()=>{
    contents.textContent = '';  //wipe out page
    addMenu();
})




