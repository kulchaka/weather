import { CITY_LOC } from "../constants/constants";

function renderDate(data) {
  CITY_LOC.textContent = `${data.name}, ${data.country}`;
}

export { renderDate };
