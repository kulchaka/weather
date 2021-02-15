const SUBMIT = document.querySelector(".search__form");
const INPUT_FORM = document.querySelector(".search__input");
const CITY_LOC = document.querySelector(".location__city");
const INFO_BLOCK = document.querySelector(".result-block");
const CURRENT_TEMP = document.querySelector(".temp__temperature");
const CURRENT_DESC = document.querySelector(".temp__desc");
const WIND = document.querySelector(".wind__result");
const HUMIDITY = document.querySelector(".hum__result");
const PRESSURE = document.querySelector(".prec__result");
const DATE_LOC = document.querySelector(".location__date");
const DAY_LOC = document.querySelector(".location__day");
const LOADER = document.querySelector(".load");
const ERROR_FOUND = document.querySelector(".cant-find");
const WEEK_LIST = document.querySelector(".week-list");

const TEMPLATE_DAY = `<li class="day-block">
                        <span class="day__name"></span>
                        <span class="day__temp"></span>
                    </li>`;

const DAYS_LONG_ARRAY = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const DAYS_SHORT_ARRAY = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const API_KEY = "d9dd885fb445dbae5ec582c99cabc4f2";

const DATA_BASE_CITY = require("../../data/city.list.min.json");
