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
  console.log(response.data);
}
let apiKey = "ec60a7f865c1bc2ca6ffb4f631d54c2d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=riga&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
