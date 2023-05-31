function showSelctedCountry(event) {
  if (event.target.value.length > 0) {
    let now = moment().tz(event.target.value).format("dddd, MMMM DD, YYYY LT");
    alert(`It is ${now} in ${event.target.value}`);
  }
}

let countrieSelect = document.querySelector("#countries");
countrieSelect.addEventListener("change", showSelctedCountry);

function updateTime() {
  let newyorkUpdate = document.querySelector("#new-york .lastUpdate");
  let newyorkElement = moment().tz("America/New_York");
  newyorkUpdate.innerHTML = newyorkElement.format("MMM DD, YYYY");
  let newyorkTime = document.querySelector("#newyork-time");
  newyorkTime.innerHTML = newyorkElement.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  let romeUpdate = document.querySelector("#rome .lastUpdate");
  let romeElement = moment().tz("Europe/Rome");
  romeUpdate.innerHTML = romeElement.format("MMM DD, YYYY");
  let romeTime = document.querySelector("#rome-time");
  romeTime.innerHTML = romeElement.format("hh:mm:ss [<small>]A[</small>]");

  let canadaUpdate = document.querySelector("#canada .lastUpdate");
  let canadaElement = moment().tz("America / Vancouver");
  canadaUpdate.innerHTML = canadaElement.format("MMM DD, YYYY");
  let canadaTime = document.querySelector("#canada-time");
  canadaTime.innerHTML = canadaElement.format("hh:mm:ss [<small>]A[</small>]");

  let SydneyUpdate = document.querySelector("#Sydney .lastUpdate");
  let SydneyElement = moment().tz("Australia/Sydney");
  SydneyUpdate.innerHTML = SydneyElement.format("MMM DD, YYYY");
  let SydneyTime = document.querySelector("#Sydney-time");
  SydneyTime.innerHTML = SydneyElement.format("hh:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
