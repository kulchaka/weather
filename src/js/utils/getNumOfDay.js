function getNumOfDay(num) {
  const date = new Date(+(num + "000"));
  return date.getDay();
}

export { getNumOfDay };
