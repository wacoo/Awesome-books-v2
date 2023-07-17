import { add, list, contact, btnList, btnAdd, btnContact, infoDisplay, displaDate } from "../index.js";

function loadPage() {
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
}

function showDefaultTab() {
    add.style.display = 'none';
    list.style.display = 'block';
    contact.style.display = 'none';
    btnList.className = 'active';
}

function showDate() {
    const newDate = new Date();
    displaDate.innerHTML = newDate;
}

export { loadPage, showDefaultTab, showDate};
