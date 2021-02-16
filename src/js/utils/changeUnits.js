function changeUnits(country) {
  if (
    country === "BS" ||
    country === "BZ" ||
    country === "KY" ||
    country === "PW" ||
    country === "US" ||
    country === "LR"
  ) {
    // units = "imperial";
    localStorage.setItem("units", "imperial");
    localStorage.setItem("temperature", "°F");
    // temperature = "°F";
  } else {
    // units = "metric";
    localStorage.setItem("units", "metric");
    localStorage.setItem("temperature", "°C");
    // temperature = "°C";
  }
}

export { changeUnits };
