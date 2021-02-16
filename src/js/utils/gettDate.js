function gettDate(num) {
  const date = new Date(+(num + "000"));
  return date.toLocaleDateString();
}

export { gettDate };
