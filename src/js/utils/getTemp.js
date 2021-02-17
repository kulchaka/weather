import { INFO_BLOCK, LOADER, API_KEY } from "../constants/constants";
import { renderTemp } from "../utils/renderTemp";
import { renderTempDays } from "../utils/renderTempDays";

async function getTemp(lat, lon, lang) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${localStorage.getItem(
        "units"
      )}&lang=${lang}&appid=${API_KEY}`
    );
    const data = await res.json();
    LOADER.classList = "load";
    INFO_BLOCK.classList = "result-block_show";
    localStorage.setItem("objData", JSON.stringify(data));
    renderTemp(data);
    renderTempDays(data);
    console.log(data);
  } catch (error) {
    console.error(error, "404 Error");
  }
}

export { getTemp };
