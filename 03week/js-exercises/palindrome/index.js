function stringBackward(string) {
  let reverse = string
    .split("")
    .reverse()
    .join("");

  return reverse == string;
}

console.log(stringBackward("rawanddnawar"));
