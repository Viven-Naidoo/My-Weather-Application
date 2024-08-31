function refreshWeather(response) {
  console.log(response.data);
}

function searchCity(city) {
  let apiKey = "95t503a47d4232o4806ad4bb3df835e4";
  let apiUrl =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}";
  axios.get(apiUrl).then(refreshWeather);
  console.log(apiUrl);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);
