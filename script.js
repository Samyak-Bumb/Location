const find_btn = document.querySelector('#find_btn');
const data_box = document.querySelector('.data_box');
const top_box = document.querySelector('.top_box');
const continent = document.querySelector('#continent');
const country = document.querySelector('#country');
const countryCode = document.querySelector('#countryCode');
const city = document.querySelector('#city');
const region = document.querySelector('#region');
const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
let open = false;

find_btn.addEventListener('click', function(){
   if (open == false){
      data_box.style.margin='3em 0';
      top_box.style.padding='10px';
      data_box.style.height='auto';
      top_box.style.height='auto';
      data_box.style.transition='800ms';
      open=true;
      getLocation();
   }
   else{
      data_box.style.margin='0px';
      top_box.style.padding='0px';
      data_box.style.height='0px';
      top_box.style.height='0px';
      data_box.style.transition='450ms';
      open=false;
   }
   function getLocation(){
      fetch('https://extreme-ip-lookup.com/json/')
         .then(res=>res.json())
         .then(response=>{
            continent.innerHTML = 'Continent:-  ' + response.continent;
            country.innerHTML = 'Country:-  ' + response.country;
            countryCode.innerHTML = 'Country Code:-  ' + response.countryCode;
            city.innerHTML = 'City:-  ' + response.city;
            region.innerHTML = 'Region:-  ' + response.region;
            latitude.innerHTML = 'Latitude:-  ' + response.lat;
            longitude.innerHTML = 'Longitude:-  ' + response.lon;
         })
         .catch((data, status)=>{
            alert('Failed to get Location! Check internet Connection !')
         })
   }
});