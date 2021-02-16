import {
  CURRENT_TEMP,
  CURRENT_DESC,
  DATE_LOC,
  DAY_LOC,
  DAYS_LONG_ARRAY,
} from "../constants/constants";
import { getNumOfDay } from "../utils/getNumOfDay";
import { gettDate } from "../utils/gettDate";

function renderTemp(data) {
  CURRENT_TEMP.textContent = `${Math.round(
    data.current.temp
  )}${localStorage.getItem("temperature")}`;
  CURRENT_DESC.textContent = data.current.weather[0].description;
  DAY_LOC.textContent = DAYS_LONG_ARRAY[getNumOfDay(data.current.dt)];
  DATE_LOC.textContent = gettDate(data.current.dt);
}

export { renderTemp };
