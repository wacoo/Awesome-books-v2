import {default as Catalog } from './modules/catalog.js';
import {loadPage, showDefaultTab, showDate} from './modules/nav.js';

let catalog = null;

catalog = new Catalog();

catalog.getDataForm();
catalog.restoreBooks();
catalog.displayStorage();

loadPage();
showDefaultTab();
showDate();