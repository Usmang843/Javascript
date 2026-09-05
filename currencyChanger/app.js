const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

const dropdownSelects = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdownSelects) {
  for (currCode in countryList) {
    // console.log(code, countryList[code]);
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "PKR"){
        newOption.selected = true;
    }else if(select.name === "to" && currCode === "INR"){
        newOption.selected = true;
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt)=>{
    updateFlag(evt.target);
  })
}

const updateFlag = (element) =>{
    // console.log(element);
    let currCode = element.value;
    // console.log(currCode)
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


btn.addEventListener("click", async (evt)=>{ 
    evt.preventDefault();
    let amount = document.querySelector("form input");
    let amtVal  = amount.value;
    // console.log(amtVal);
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    // console.log(fromCurr.value, toCurr.value);
    let fromCurrency = fromCurr.value.toLowerCase();
    let toCurrency = toCurr.value.toLowerCase();

    const URL = `${BASE_URL}/currencies/${fromCurrency}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(response);
    console.log(data);
    let rate = data[fromCurrency][toCurrency]
    // console.log(rate);
    // console.log(amount.value)
    let finalAmt = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt}${toCurr.value}`;

});