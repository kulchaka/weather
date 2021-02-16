import { toUperCase } from "./toUperCase";
import { sendInput } from "./sendInput";
import {
  SUBMIT,
  INFO_BLOCK,
  LOADER,
  WEEK_LIST,
  INPUT_FORM,
} from "../constants/constants";

function submitInput(event) {
  event.preventDefault();
  const input = INPUT_FORM.value.trim();
  if (input.length > 2) {
    const cityName = toUperCase(input);
    SUBMIT.reset();
    sendInput(cityName);
    INFO_BLOCK.classList = "result-block";
    LOADER.classList = "load load_show";
    WEEK_LIST.innerHTML = "";
  } else {
    console.log("enter something");
  }
}

export { submitInput };
