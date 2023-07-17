import { loadPage, showDate, showDefaultTab } from "./modules/nav.js";
import { Book, Catalog } from "./modules/script.js";

//Containers
const form = document.getElementById('frm_books');
const display = document.getElementById('display');
const infoDisplayS = document.querySelector('small');

const add = document.querySelector('.wrapper_frm');
const list = document.querySelector('.wrapper_list');
const contact = document.querySelector('.wrapper_contact');

//Buttons
const btnList = document.getElementById('btn_list');
const btnAdd = document.getElementById('btn_add');
const btnContact = document.getElementById('btn_contact');
const infoDisplay = document.querySelector('small');

const displaDate = document.querySelector('.date_cls');

let catalog = null;
let i = 0;

catalog = new Catalog();
catalog.getDataForm();
catalog.restoreBooks();
console.log(localStorage.getItem('data'));
catalog.displayStorage();

loadPage();
showDefaultTab();
showDate();

export {add, list, contact, btnList, btnAdd, btnContact, infoDisplay, display, form, infoDisplayS, displaDate, catalog }