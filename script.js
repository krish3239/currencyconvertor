
const host = "api.frankfurter.app";
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

const dropdowns = document.querySelectorAll(".dropdown select");
for (let select of dropdowns) {
  for (let currcode in countryList) {
    let newOption = document.createElement("option");

    newOption.innerText = currcode;
    newOption.value = currcode;
    if (select.name === "from" && currcode === "USD") {
    } else if (select.name === "to" && currcode === "INR") {
    } else {
      select.append(newOption);
    }
  }
}
const fr = document.getElementById("f");
const too = document.getElementById("t");
f.addEventListener("change", (e) => {
  update(e.target);
});
too.addEventListener("change", (e) => {
  update(e.target);
});
const update = (element) => {
  let currcode = element.value;
  let countrycode = countryList[currcode];
  let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");

  img.src = newsrc;
};
const btn = document.querySelector("form button");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let amount = document.querySelector(".amount input");
  let amval = amount.value;
  if (amval === "" || amval < 0) {
    amtval = 1;
    amount.value = 1;
  }
  console.log(amval);
  fetch(
    `https://${host}/latest?amount=${amval}&from=${fromCurr.value}&to=${toCurr.value}`
  )
    .then((resp) => resp.json())
    .then(({ rates }) => {
      //console.log(rates[toCurr.value])
     // alert(toCurr.value);
      let ans = rates[toCurr.value];
      msg.innerText = `${amval}   ${fromCurr.value} = ${ans}  ${toCurr.value}`;
     // alert(`${amval}   ${fromCurr.value} = ${ans}  ${toCurr.value}`)
    });
});
