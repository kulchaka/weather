const submit = document.querySelector(".search__form");
const input = document.querySelector(".search__input");
const city = document.querySelector(".location__city");
const infoBlock = document.querySelector(".result-block");
const currTemp = document.querySelector(".temp__temperature");
const currDesc = document.querySelector(".temp__desc");
const locDate = document.querySelector(".location__date");
const locDay = document.querySelector(".location__day");

const dayArr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const APIkey = "d9dd885fb445dbae5ec582c99cabc4f2";

submit.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityName = tuUpper(input.value);
  submit.reset();
  sendInput(cityName);
});

function sendInput(city) {
  fetch("../data/city.list.json")
    .then((response) => response.json())
    .then((data) => {
      //   data.forEach((element) => {
      //     if (element.name == city) {
      //       console.log(element);
      //       getTemp(
      //         element.coord.lat,
      //         element.coord.lon,
      //         element.country.toLowerCase()
      //       );
      //       renderDate(element);
      //     }
      //   });
      for (const iterator of data) {
        if (iterator.name == city) {
          console.log(iterator);
          getTemp(
            iterator.coord.lat,
            iterator.coord.lon,
            iterator.country.toLowerCase()
          );
          renderDate(iterator);
          break;
        }
      }
    });
}

async function getTemp(lat, lon, lang) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=${lang}&appid=${APIkey}`
    );
    const data = await res.json();
    renderTemp(data);
    console.log(data);
    infoBlock.classList = "result-block_show";
  } catch (error) {
    console.error(error, "404 Error");
  }
}

function renderDate(data) {
  //   console.log(data);
  city.textContent = `${data.name}, ${data.country}`;
}

function renderTemp(data) {
  currTemp.textContent = `${Math.round(data.current.temp)}°C`;
  currDesc.textContent = data.current.weather[0].description;
  locDay.textContent = getDate();
}

function getDate() {
  const now = new Date();
  locDate.textContent = now.toLocaleDateString();
  let maxDate = now.getTime() + 86400000;
  //   console.log(new Date(now.getTime()));
  //   console.log(new Date(maxDate));
  maxDate = new Date(maxDate);
  maxDateFinal = maxDate.toString();
  //   console.log(m    axDateFinal);
  return dayArr[now.getDate() - 1];
}

function tuUpper(str) {
  return str[0].toUpperCase() + str.slice(1);
}

getDate();
