import { CITY_LOC } from "../constants/constants";

function renderDate(data) {
  console.log(data);
  CITY_LOC.textContent = `${data.name}, ${data.country}`;
}

export { renderDate };
