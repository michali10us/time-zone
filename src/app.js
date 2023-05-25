function showSelctedCountry(event) {
  if (event.target.value.length > 0) {
    let now = moment().tz(event.target.value).format("dddd, MMMM DD, YYYY LT");
    alert(`It is ${now} in ${event.target.value}`);
  }
}

let countrieSelect = document.querySelector("#countries");
countrieSelect.addEventListener("change", showSelctedCountry);
