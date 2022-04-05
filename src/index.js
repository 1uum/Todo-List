//import render from './modules/default'

//document.addEventListener('DOMContentLoaded' , render.loadDefault);

const open_modal_add = document.getElementById('add-button');
const modal_container_add = document.getElementById('modal-container');
const close_modal_add = document.getElementById('btn-close');

const open_modal_project = document.getElementById('add-project');
const modal_container_project = document.getElementById('modal-project');
const close_modal_project =document.getElementById('btn-close-project');

open_modal_add.addEventListener('click', () =>{
    modal_container_add.classList.add('show_modal_add');
});

close_modal_add.addEventListener('click', () =>{
    modal_container_add.classList.remove('show_modal_add');
});

open_modal_project.addEventListener('click', () => {
    modal_container_project.classList.add('show_modal_project');
})

close_modal_project.addEventListener('click', () => {
    modal_container_project.classList.remove('show_modal_project');
})