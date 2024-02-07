export { contactActive };

function contactActive() {

    

    
    const content = document.querySelector('#content');

    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };

    const pageHeader = document.createElement('div');
    pageHeader.classList.add('page-header');
    
    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us';
    pageHeader.appendChild(contactHeader);

    const chefCard = document.createElement('div');
    chefCard.classList.add('employee');
    chefCard.textContent = 'Chef';

    const managerCard = document.createElement('div');
    managerCard.classList.add('employee');
    managerCard.textContent = 'Manager';

    const waiterCard = document.createElement('div');
    waiterCard.classList.add('employee');
    waiterCard.textContent = 'Waiter';

    const employeeContainer = document.createElement('div');
    employeeContainer.classList.add('employee-container');

    employeeContainer.appendChild(chefCard);
    employeeContainer.appendChild(managerCard);
    employeeContainer.appendChild(waiterCard);
    content.appendChild(employeeContainer);





}