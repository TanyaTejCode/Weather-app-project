function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];
  let day = date.getDate();
  return `${month} ${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = Math.round(response.data.main.temp);
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  let description = document.querySelector("#description");
  description.innerHTML = response.data.weather[0].description;
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = ` ${response.data.main.humidity}`;
  let wind = document.querySelector("#wind");
  wind.innerHTML = ` ${response.data.wind.speed} `;
  let dateElement = document.querySelector("#date");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "ec60a7f865c1bc2ca6ffb4f631d54c2d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=riga&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
