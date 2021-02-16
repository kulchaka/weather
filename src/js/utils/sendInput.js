import { DATA_BASE_CITY as data } from "../constants/constants";
import { renderDate } from "../utils/renderDate";
import { changeUnits } from "../utils/changeUnits";
import { getTemp } from "../utils/getTemp";

function sendInput(city) {
  for (const iterator of data) {
    if (iterator.name == city) {
      //   console.log(iterator);
      changeUnits(iterator.country);
      getTemp(
        iterator.coord.lat,
        iterator.coord.lon,
        iterator.country.toLowerCase()
      );
      renderDate(iterator);
      break;
    }
  }
}

export { sendInput };
