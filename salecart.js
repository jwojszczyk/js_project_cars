let cars = JSON.parse(window.localStorage.getItem("car"));
console.log(cars);

document.getElementById("the_chosen").innerHTML = cars.name;
document.getElementById("fullPrice").innerHTML = cars.price;
document.getElementById("imgOfChosen").src = cars.imageSrc;

const $accessories = document.getElementById("accessories");
if (cars.price > 130000) {
  $accessories.classList.add("hidden");
}

const $homeBtn = document.getElementById("back_Btn");
function backToIndex() {
  window.location.href = "index.html";
}
$homeBtn.addEventListener("click", backToIndex);

let currentDate = new Date();
document.getElementById(
  "today"
).innerHTML = `Dziś jest ${currentDate.getDate()}. ${
  currentDate.getMonth() + 1
}. ${currentDate.getFullYear()}. Samochód odbierzesz za 14 dni`;

const $carPurchase = document.getElementById("purchase_button");
const $addMore = document.getElementById("addMore");
const $congratulations = document.getElementById("congratulations");

const $fname = document.getElementById("fname_input");
const $lname = document.getElementById("lname_input");
const $purchError = document.getElementById("forms_error");

if (localStorage.getItem("fname") && localStorage.getItem("lname")) {
  $fname.value = localStorage.getItem("fname");
  $lname.value = localStorage.getItem("lname");
}
// $carPurchase.addEventListener("keydown", (e) => {
//   if (e.code === "Enter" || e.code === "NumpadEnter") {
//     carPurchase();
//   }
// });

function carPurchase() {
  const fname = $fname.value;
  const lname = $lname.value;
  const name_surname = fname + " " + lname;

  if (fname === "" || lname === "") {
    $purchError.classList.remove("hidden");
    return false;
  } else {
    document.getElementById("name_surname").innerHTML = `${name_surname}`;
    localStorage.setItem("fname", $fname.value);
    localStorage.setItem("lname", $lname.value);
  }
  $addMore.classList.add("hidden");
  $congratulations.classList.remove("hidden");
}
$carPurchase.addEventListener("click", carPurchase);

const $chooseCity = document.getElementById("city");

function displayCity() {
  document.getElementById("place").innerText = $chooseCity.value;
  localStorage.setItem("city", $chooseCity.value);
}
if (localStorage.getItem("city")) {
  $chooseCity.value = localStorage.getItem("city");
}

document.getElementById("place").innerText = $chooseCity.value;

function hideLeaseTxt() {
  document.getElementById("lease_txt").style.visibility = "hidden";
}
function showLeaseTxt() {
  document.getElementById("lease_txt").style.visibility = "visible";
}

const checkBox1 = document.getElementById("winter_tires");
const checkBox2 = document.getElementById("bike_carrier");
const checkBox3 = document.getElementById("alloy_wheels");
const checkBox4 = document.getElementById("lthrseatcvrs");

let basicPrice = cars.price;
document.getElementById("amount").innerHTML = basicPrice;

function addAccessories() {
  let add = 0;
  let added = "";

  if (checkBox1.checked === true) {
    add += 2000;
    added += " opony zimowe";
  }
  if (checkBox2.checked === true) {
    add += 3500;
    added += " przyczepka rowerowa";
  }
  if (checkBox3.checked === true) {
    add += 3500;
    added += " aluminiowe felgi";
  }
  if (checkBox4.checked === true) {
    add += 5500;
    added += " skórzana tapicerka";
  }
  document.getElementById("added").innerHTML = added;
  document.getElementById("fullPrice").innerHTML = basicPrice + add;
  document.getElementById("amount").innerHTML = basicPrice + add;
}

let pickupDate = new Date();
pickupDate.setDate(pickupDate.getDate() + 14);
document.getElementById(
  "pickup_day"
).innerHTML = `Samochód będzie gotowy do odbioru ${pickupDate.getDate()}. ${
  pickupDate.getMonth() + 1
}. ${pickupDate.getFullYear()}`;

const $doneBtn = document.getElementById("doneBtn");
function done() {
  window.location.href = "index.html";
  window.localStorage.clear();
}
$doneBtn.addEventListener("click", done);
