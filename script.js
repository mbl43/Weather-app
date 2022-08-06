//initillize variable that will target in js
const temp = document.querySelector(".weather1");
const city = document.querySelector(".weather2 p");
const timedate = document.querySelector(".weather2 span");
const emoji = document.querySelector(".weather3 img");
const info = document.querySelector(".weather3 span"); //condition
const searchbtn = document.querySelector(".search");
const form = document.querySelector("form");

let x = "pune";
const fetchData = async (x) => {
   try {
    const url = `https://api.weatherapi.com/v1/current.json?key=635c4b2eef6a47b8b48170110220608&q=${x}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // data structureing means you can fetch data from this method
    const {
      current: {
        temp_c,
        condition: { text, icon },
        
      },
      location: { name ,localtime},
    } = data;
    updateDom(temp_c, name, icon, text, localtime);
       
   } catch (error) {
       alert("location not found");
       
   }
};
function updateDom(temperature, cityname, emojiname, condition, dateinfo) {
  temp.innerText = temperature;
  city.innerText = cityname;
  emoji.src = emojiname;
  info.innerText = condition;
  timedate.innerText = dateinfo;
}
fetchData(x);
const searchx = (e) => 
{
  e.preventDefault();
  x=searchbtn.value;
  fetchData(x);
};

form.addEventListener("submit",searchx);
