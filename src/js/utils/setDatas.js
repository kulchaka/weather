import {
  CURRENT_TEMP,
  CURRENT_DESC,
  DAY_LOC,
  DATE_LOC,
  WIND,
  HUMIDITY,
  PRESSURE,
  DAYS_LONG_ARRAY,
} from "../constants/constants";
import { gettDate } from "../utils/gettDate";
import { getNumOfDay } from "../utils/getNumOfDay";

function setDatas(event) {
  let target = event.target;
  let data = JSON.parse(localStorage.getItem("objData"));
  if (
    event.target.className == "day__name" ||
    event.target.classList == "day__temp"
  ) {
    target = event.target.parentNode;
  }

  const listsOfdays = document.querySelectorAll(".day-block");
  listsOfdays.forEach((e) => e.classList.remove("day-block_active"));
  target.classList.add("day-block_active");
  const numDay = target.getAttribute("data-day");
  CURRENT_TEMP.textContent =
    Math.round(data.daily[numDay].temp.min) +
    localStorage.getItem("temperature");
  CURRENT_DESC.textContent = data.daily[numDay].weather[0].description;
  DAY_LOC.textContent = DAYS_LONG_ARRAY[getNumOfDay(data.daily[numDay].dt)];
  DATE_LOC.textContent = gettDate(data.daily[numDay].dt);
  WIND.textContent = Math.round(data.daily[numDay].wind_speed) + " km/h";
  HUMIDITY.textContent = data.daily[numDay].humidity + " %";
  PRESSURE.textContent = data.daily[numDay].pressure + " %";
}

export { setDatas };
