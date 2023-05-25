/* function showSelctedCountry(event) {
  if (event.target.value === "israel") {
    let israelTime = moment().tz("Asia/Jerusalem");
    let israelElemnt = israelTime.format("dddd, MMMM DD, YYYY LT");
    alert(`It is ${israelElemnt} in Israel`);
  }
  if (event.target.value === "california") {
    let caliTime = moment().tz("America/Los_Angeles");
    let calilElemnt = caliTime.format("dddd, MMMM DD, YYYY LT");
    alert(`It is ${calilElemnt} in California`);
  }
  if (event.target.value === "hawaii") {
    let hawaiiTime = moment().tz("US/Hawaii");
    let hawaiiElemnt = hawaiiTime.format("dddd, MMMM DD, YYYY LT");
    alert(`It is ${hawaiiElemnt} in Hawaii`);
  }
} */

function showSelctedCountry(event) {
  if (event.target.value.length > 0) {
    let now = moment().tz(event.target.value).format("dddd, MMMM DD, YYYY LT");
    alert(`It is ${now} in ${event.target.value}`);
  }
}

let countrieSelect = document.querySelector("#countries");
countrieSelect.addEventListener("change", showSelctedCountry);
