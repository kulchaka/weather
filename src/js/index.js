//??-----------------------Imports---------------------------
import { submitInput } from "./utils/submitInput";
import { SUBMIT } from "./constants/constants";
import "../css/index.css";

//??-----------------------Function---------------------------
SUBMIT.addEventListener("submit", submitInput);

//!!-----------------------Old Code---------------------------
// const submit = document.querySelector(".search__form");
// const inputForm = document.querySelector(".search__input");
// const city = document.querySelector(".location__city");
// const infoBlock = document.querySelector(".result-block");
// const currTemp = document.querySelector(".temp__temperature");
// const currDesc = document.querySelector(".temp__desc");
// const wind = document.querySelector(".wind__result");
// const humidity = document.querySelector(".hum__result");
// const pressure = document.querySelector(".prec__result");
// const locDate = document.querySelector(".location__date");
// const locDay = document.querySelector(".location__day");
// const load = document.querySelector(".load");
// const cantFind = document.querySelector(".cant-find");
// const elOfList = document.querySelector(".week-list");
// let temperature = "°C";
// let units = "standard";

// const templateDay = `<li class="day-block">
//                         <span class="day__name"></span>
//                         <span class="day__temp"></span>
//                     </li>`;

// let objData = {};

// const dayArr = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// const dayShortArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// const APIkey = "d9dd885fb445dbae5ec582c99cabc4f2";

// SUBMIT.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const input = INPUT_FORM.value.trim();
//   if (input.length > 2) {
//     const cityName = toUperCase(input);
//     SUBMIT.reset();
//     sendInput(cityName);
//     INFO_BLOCK.classList = "result-block";
//     LOADER.classList = "load load_show";
//     WEEK_LIST.innerHTML = "";
//   } else {
//     console.log("enter something");
//   }
// });

// function sendInput(city) {
//   fetch("./city.list.json")
//     .then((response) => response.json())
//     .then((data) => {
//       for (const iterator of data) {
//         if (iterator.name == city) {
//           //   console.log(iterator);
//           changeUnits(iterator.country);
//           getTemp(
//             iterator.coord.lat,
//             iterator.coord.lon,
//             iterator.country.toLowerCase()
//           );
//           renderDate(iterator);
//           break;
//         }
//       }
//     })
//     .catch((err) => {
//       console.log("Error 404");
//     });
// }

// async function getTemp(lat, lon, lang) {
//   try {
//     const res = await fetch(
//       `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&lang=${lang}&appid=${APIkey}`
//     );
//     const data = await res.json();
//     load.classList = "load";
//     infoBlock.classList = "result-block_show";
//     objData = data;
//     renderTemp(data);
//     renderTempDays(data);
//     // console.log(data);
//   } catch (error) {
//     console.error(error, "404 Error");
//   }
// }

// function changeUnits(country) {
//   if (
//     country === "BS" ||
//     country === "BZ" ||
//     country === "KY" ||
//     country === "PW" ||
//     country === "US" ||
//     country === "LR"
//   ) {
//     units = "imperial";
//     temperature = "°F";
//   } else {
//     units = "metric";
//     temperature = "°C";
//   }
// }

// function renderDate(data) {
//   city.textContent = `${data.name}, ${data.country}`;
// }

// function renderTemp(data) {
//   currTemp.textContent = `${Math.round(data.current.temp)}${temperature}`;
//   currDesc.textContent = data.current.weather[0].description;
//   locDay.textContent = dayArr[getNumOfDay(data.current.dt)];
//   locDate.textContent = gettDate(data.current.dt);
// }

// function gettDate(num) {
//   const date = new Date(+(num + "000"));
//   return date.toLocaleDateString();
// }

// function toUperCase(str) {
//   return str[0].toUpperCase() + str.slice(1);
// }

// function renderTempDays(data) {
//   data.daily.forEach((element, indx) => {
//     if (indx < 5) {
//       let day = new Date().getTime();
//       day += 24 * 60 * 60 * 1000 * indx;
//       const dayInfo = dayShortArr[new Date(day).getDay()];
//       createDay(dayInfo, Math.round(element.temp.min), indx);
//       document
//         .querySelectorAll(".day-block")
//         .forEach((e) => e.addEventListener("click", setDatas));
//     }
//   });
// }

// function createDay(day, temp, indx) {
//   elOfList.insertAdjacentHTML("afterbegin", templateDay);
//   const newCard = elOfList.firstElementChild;
//   newCard.querySelector(".day__name").parentNode.dataset.day = indx;
//   newCard.querySelector(".day__name").textContent = day;
//   newCard.querySelector(".day__temp").textContent = temp + temperature;
//   return newCard;
// }

// function getNumOfDay(num) {
//   const date = new Date(+(num + "000"));
//   return date.getDay();
// }

// function setDatas(event) {
//   let target = event.target;
//   if (
//     event.target.className == "day__name" ||
//     event.target.classList == "day__temp"
//   ) {
//     target = event.target.parentNode;
//   }
//   const listsOfdays = document.querySelectorAll(".day-block");
//   listsOfdays.forEach((e) => e.classList.remove("day-block_active"));
//   target.classList.add("day-block_active");
//   const numDay = target.getAttribute("data-day");
//   currTemp.textContent =
//     Math.round(objData.daily[numDay].temp.min) + temperature;
//   currDesc.textContent = objData.daily[numDay].weather[0].description;
//   locDay.textContent = dayArr[getNumOfDay(objData.daily[numDay].dt)];
//   locDate.textContent = gettDate(objData.daily[numDay].dt);
//   wind.textContent = Math.round(objData.daily[numDay].wind_speed) + " km/h";
//   humidity.textContent = objData.daily[numDay].humidity + " %";
//   pressure.textContent = objData.daily[numDay].pressure + " %";
// }
