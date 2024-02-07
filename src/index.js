import { homeActive } from "./home.js";
import { contactActive } from "./contact.js";


function screenController() {
    const header = document.querySelector('.header');

    const nav = document.createElement('nav');
    nav.classList.add('top-nav');
  
    const homeBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.type = 'button';
    contactBtn.type = 'button';
    homeBtn.textContent = 'Home';
    contactBtn.textContent = 'Contact';
    homeBtn.addEventListener('click' , homeActive);
    contactBtn.addEventListener('click' , contactActive);
  
    nav.appendChild(homeBtn);
    nav.appendChild(contactBtn);
    console.log(header);
    header.appendChild(nav);

    homeActive();



}

screenController();