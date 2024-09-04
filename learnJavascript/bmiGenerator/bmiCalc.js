const form = document.querySelector("form");
// below getting value of input give us empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop for a while before submitting

  const height = parseInt(document.querySelector("#height").value);
  // isNan(height) return ture(convertable to number)or false
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height < 0) {
    results.innerHTML = "Please give a Valid Height";
  } else if (weight < 0) {
    results.innerHTML = "Please give a Valid weight";
  } else {
    const bni = (weight / ((height * height) / 10000)).toFixed(2);
    if (bni < 18.5) {
      results.innerHTML = `<span>Under Weight : ${bni}</span>`;
    } else if (bni >= 18.5 || bni < 25) {
      results.innerHTML = `<span>Normal Weight: ${bni}</span>`;
    } else if (bni >= 25) {
      results.innerHTML = `<span>Normal Weight: ${bni}</span>`;
    }
  }
});
