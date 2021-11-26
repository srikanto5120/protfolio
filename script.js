function loadNumber(name, number) {
  let counter = 0;
  setInterval(() => {
    if (counter == number) {
      clearInterval();
    } else {
      counter += 1;
      name.innerHTML = `${counter} %`;
    }
  }, 50);
}
const htmlNumber = document.getElementById("html-number");
const cssnNumber = document.getElementById("css-number");
const bootstrapNumber = document.getElementById("bootstrap-number");
const jsNumber = document.getElementById("js-number");
const reactNumber = document.getElementById("react-number");
loadNumber(htmlNumber, 93);
loadNumber(cssnNumber, 80);
loadNumber(bootstrapNumber, 70);
loadNumber(jsNumber, 80);
loadNumber(reactNumber, 80);
