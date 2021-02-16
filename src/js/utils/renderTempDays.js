import { createDay } from "../utils/createDay";
import { setDatas } from "../utils/setDatas";
import { DAYS_SHORT_ARRAY } from "../constants/constants";

function renderTempDays(data) {
  data.daily.forEach((element, indx) => {
    if (indx < 5) {
      let day = new Date().getTime();
      day += 24 * 60 * 60 * 1000 * indx;
      const dayInfo = DAYS_SHORT_ARRAY[new Date(day).getDay()];
      createDay(dayInfo, Math.round(element.temp.min), indx);
      document
        .querySelectorAll(".day-block")
        .forEach((e) => e.addEventListener("click", setDatas));
    }
  });
}

export { renderTempDays };
