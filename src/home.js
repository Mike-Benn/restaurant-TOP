export { homeActive };

function homeActive() {

    
    const content = document.querySelector('#content');
    const header = document.querySelector('.header');
    
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    };
  
    // Content Container
  
    const pageHeader = document.createElement('h1');
    pageHeader.classList.add('page-header');
    pageHeader.textContent = 'Mike\'s Cereal Bar';
    content.appendChild(pageHeader);
  
    const homeContent = document.createElement('div');
    homeContent.classList.add('home-content');
    content.appendChild(homeContent);
  
    const restaurantBio = document.createElement('div');
    restaurantBio.classList.add('restaurant-bio');
  
    const bioContent = document.createElement('p');
    bioContent.classList.add('bio-content');
    bioContent.textContent = "Mike\'s cereal bar is your one stop shop for all things cereal.  Prepare your taste buds to be satisfied as you pay a flat price to be treated to an all you can eat cereal bonanza!";
  
    restaurantBio.appendChild(bioContent);
    homeContent.appendChild(restaurantBio);
    
  
  
  
    const restaurantHours = document.createElement('div');
    restaurantHours.classList.add('restaurant-hours');
  
    const hours = document.createElement('h2');
    hours.textContent = 'Hours';
    const sunday = document.createElement('p');
    sunday.classList.add('weekdays');
    sunday.textContent = 'Sunday: 6am - 10pm';
    const monday = document.createElement('p');
    monday.classList.add('weekdays');
    monday.textContent = 'Monday: 6am - 10pm';
    const tuesday = document.createElement('p');
    tuesday.classList.add('weekdays');
    tuesday.textContent = 'Tuesday: 6am - 10pm';
    const wednesday = document.createElement('p');
    wednesday.classList.add('weekdays');
    wednesday.textContent = 'Wednesday: 6am - 10pm';
    const thursday = document.createElement('p');
    thursday.classList.add('weekdays');
    thursday.textContent = 'Thursday: 6am - 10pm';
    const friday = document.createElement('p');
    friday.classList.add('weekdays');
    friday.textContent = 'Friday: 6am - 10pm';
    const saturday = document.createElement('p');
    saturday.classList.add('weekdays');
    saturday.textContent = 'Saturday: 6am - 2am';
  
    restaurantHours.appendChild(hours);
    restaurantHours.appendChild(sunday);
    restaurantHours.appendChild(monday);
    restaurantHours.appendChild(tuesday);
    restaurantHours.appendChild(wednesday);
    restaurantHours.appendChild(thursday);
    restaurantHours.appendChild(friday);
    restaurantHours.appendChild(saturday);
    homeContent.appendChild(restaurantHours);
  
  
  
  
  
    const location = document.createElement('div');
    location.classList.add('location');
  
    const locationHeader = document.createElement('h2');
    locationHeader.textContent = 'Location';
  
    const locationBio = document.createElement('p');
    locationBio.textContent = '123 Drive, Placeville, IA';
  
    location.appendChild(locationHeader);
    location.appendChild(locationBio);
    homeContent.appendChild(location);
}


  
  
  
  
  