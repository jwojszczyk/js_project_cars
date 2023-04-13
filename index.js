const $calmBtn = document.getElementById("calm_emotions");
const $strongBtn = document.getElementById("strong_emotions");
const $superBtn = document.getElementById("super_cars");
const $noBtn = document.getElementById("no_emotions");

function showCalm() {
  $calmBtn.scrollIntoView();
}
function showStrong() {
  $strongBtn.scrollIntoView();
}
function showSuper() {
  $superBtn.scrollIntoView();
}
function showNo() {
  $noBtn.scrollIntoView();
}

$calmBtn.addEventListener("click", showCalm);
$strongBtn.addEventListener("click", showStrong);
$superBtn.addEventListener("click", showSuper);
$noBtn.addEventListener("click", showNo);

let cars = [
  {
    name: "Fiat 500",
    price: 40000,
    mileage: 50000,
    power: 22,
    production: 1970,
    imageSrc: "./resources/img/500_ext.png",
  },
  {
    name: "Fiat 126",
    price: 30000,
    mileage: 86000,
    power: 23,
    production: 1973,
    imageSrc: "./resources/img/126_ext.png",
  },
  {
    name: "Honda Civic I",
    price: 46500,
    mileage: 1450000,
    power: 54,
    production: 1972,
    imageSrc: "./resources/img/civici_ext.png",
  },
  {
    name: "Škoda 110R",
    price: 77000,
    mileage: 3600,
    power: 62,
    production: 1980,
    imageSrc: "./resources/img/110r_ext.png",
  },
  {
    name: "Lada 1500s",
    price: 42000,
    mileage: 70000,
    power: 75,
    production: 1978,
    imageSrc: "./resources/img/lada_ext.png",
  },
  {
    name: "Dacia 1300",
    price: 28000,
    mileage: 100000,
    power: 54,
    production: 1974,
    imageSrc: "./resources/img/dacia_ext.png",
  },
  {
    name: "Honda NSX II",
    price: 725000,
    mileage: 5400,
    power: 581,
    production: 2015,
    imageSrc: "./resources/img/nsx_ext.png",
  },
  {
    name: "Honda S2000",
    price: 132000,
    mileage: 44000,
    power: 240,
    production: 2002,
    imageSrc: "./resources/img/h2000_ext.png",
  },
  {
    name: "Tarpan 237",
    price: 10000,
    mileage: 15400,
    power: 50,
    production: 1986,
    imageSrc: "./resources/img/tarpan_ext.png",
  },
  {
    name: "Mikrus MR-300",
    price: 37000,
    mileage: 21000,
    power: 15,
    production: 1958,
    imageSrc: "./resources/img/mikrus1_ext.png",
  },
  {
    name: "Škoda 1000MB",
    price: 40500,
    mileage: 67000,
    power: 52,
    production: 1965,
    imageSrc: "./resources/img/smb_ext.png",
  },
  {
    name: "Polonez 1500",
    price: 16000,
    mileage: 88000,
    power: 70,
    production: 1979,
    imageSrc: "./resources/img/polonez1_ext.png",
  },
];

function saleRedirect(cars) {
  window.localStorage.setItem("car", JSON.stringify(cars));
  window.location.href = "salecart.html";
}

document.getElementById("personalizef5").addEventListener("click", function () {
  saleRedirect(cars[0]);
});

document.getElementById("personalizef1").addEventListener("click", function () {
  saleRedirect(cars[1]);
});
document.getElementById("personalizeh1").addEventListener("click", function () {
  saleRedirect(cars[2]);
});
document.getElementById("personalizel1").addEventListener("click", function () {
  saleRedirect(cars[4]);
});
document.getElementById("personalizes1").addEventListener("click", function () {
  saleRedirect(cars[3]);
});
document.getElementById("personalized1").addEventListener("click", function () {
  saleRedirect(cars[5]);
});
document.getElementById("personalizen1").addEventListener("click", function () {
  saleRedirect(cars[6]);
});
document
  .getElementById("personalizeh21")
  .addEventListener("click", function () {
    saleRedirect(cars[7]);
  });
document.getElementById("personalizet1").addEventListener("click", function () {
  saleRedirect(cars[8]);
});
document.getElementById("personalizem1").addEventListener("click", function () {
  saleRedirect(cars[9]);
});
document
  .getElementById("personalizemb1")
  .addEventListener("click", function () {
    saleRedirect(cars[10]);
  });
document.getElementById("personalizep1").addEventListener("click", function () {
  saleRedirect(cars[11]);
});
