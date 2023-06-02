function updateTime() {
  let newyork = document.querySelector("#new-york");
  if (newyork) {
    let newyorkUpdate = document.querySelector("#new-york .lastUpdate");
    let newyorkElement = moment().tz("America/New_York");
    newyorkUpdate.innerHTML = newyorkElement.format("MMM DD, YYYY");
    let newyorkTime = document.querySelector("#newyork-time");
    newyorkTime.innerHTML = newyorkElement.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let rome = document.querySelector("#rome");
  if (rome) {
    let romeUpdate = document.querySelector("#rome .lastUpdate");
    let romeElement = moment().tz("Europe/Rome");
    romeUpdate.innerHTML = romeElement.format("MMM DD, YYYY");
    let romeTime = document.querySelector("#rome-time");
    romeTime.innerHTML = romeElement.format("hh:mm:ss [<small>]A[</small>]");
  }

  let canada = document.querySelector("#canada");
  if (canada) {
    let canadaUpdate = document.querySelector("#canada .lastUpdate");
    let canadaElement = moment().tz("America/Vancouver");
    canadaUpdate.innerHTML = canadaElement.format("MMM DD, YYYY");
    let canadaTime = document.querySelector("#canada-time");
    canadaTime.innerHTML = canadaElement.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  let Sydney = document.querySelector("#Sydney");
  if (Sydney) {
    let SydneyUpdate = document.querySelector("#Sydney .lastUpdate");
    let SydneyElement = moment().tz("Australia/Sydney");
    SydneyUpdate.innerHTML = SydneyElement.format("MMM DD, YYYY");
    let SydneyTime = document.querySelector("#Sydney-time");
    SydneyTime.innerHTML = SydneyElement.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}

function showSelctedCountry(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector(".citiesContainer");
    let cityTime = moment().tz(cityName);
    cityElement.innerHTML = `
    <div class="citiesContainer">
        <div class="container text-center"></div>
        <div class="row">
          <div class="col-8">
            <div class="city" >
              ${cityName} <br />
              <span class="lastUpdate">${cityTime.format("MMM DD,YYYY")}</span>
            </div>
          </div>
          <div class="col-4">
            <div class="time" id="">${cityTime.format(
              "hh:mm:ss"
            )} <small> ${cityTime.format("A")}<small></div>
          </div>
          </div>`;

    setTimeout(() => {
      showSelctedCountry(event);
    }, 1000);
  }
}
let countrieSelect = document.querySelector("#countries");
countrieSelect.addEventListener("change", showSelctedCountry);
updateTime();
setInterval(updateTime, 1000);
