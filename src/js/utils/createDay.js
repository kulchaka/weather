import { WEEK_LIST, TEMPLATE_DAY } from "../constants/constants";

function createDay(day, temp, indx) {
  WEEK_LIST.insertAdjacentHTML("afterbegin", TEMPLATE_DAY);
  const newCard = WEEK_LIST.firstElementChild;
  newCard.querySelector(".day__name").parentNode.dataset.day = indx;
  newCard.querySelector(".day__name").textContent = day;
  newCard.querySelector(".day__temp").textContent =
    temp + localStorage.getItem("temperature");
  return newCard;
}

export { createDay };
