import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

const add = document.querySelector('.wrapper_frm');
const list = document.querySelector('.wrapper_list');
const contact = document.querySelector('.wrapper_contact');
const displaDate = document.querySelector('.date_cls');
// Buttons
const btnList = document.getElementById('btn_list');
const btnAdd = document.getElementById('btn_add');
const btnContact = document.getElementById('btn_contact');
const infoDisplay = document.querySelector('small');

const loadPage = () => {
  btnList.addEventListener('click', () => {
    add.style.display = 'none';
    list.style.display = 'block';
    contact.style.display = 'none';
    btnAdd.classList.remove('active');
    btnList.classList.add('active');
    btnContact.classList.remove('active');
    infoDisplay.innerHTML = '';
  });
  btnAdd.addEventListener('click', () => {
    add.style.display = 'flex';
    list.style.display = 'none';
    contact.style.display = 'none';
    btnAdd.classList.add('active');
    btnList.classList.remove('active');
    btnContact.classList.remove('active');
    infoDisplay.innerHTML = '';
  });
  btnContact.addEventListener('click', () => {
    add.style.display = 'none';
    list.style.display = 'none';
    contact.style.display = 'flex';
    btnAdd.classList.remove('active');
    btnList.classList.remove('active');
    btnContact.classList.add('active');
    infoDisplay.innerHTML = '';
  });
};

const showDefaultTab = () => {
  add.style.display = 'none';
  list.style.display = 'block';
  contact.style.display = 'none';
  btnList.className = 'active';
};

const showDate = () => {
  const newDate = DateTime.now();
  const d = newDate.toFormat('dd/MM/yyyy h:mm:ss a');
  displaDate.innerHTML = d;
};

export { loadPage, showDefaultTab, showDate };
