let cars = [
  {
    name: "Fiat 500",
    price: 40000,
    mileage: 50000,
    power: 22,
    production: 1970,
    imageSrc: "./resources/img/500_ext.png",
    image2Src: "./resources/img/500_int.png",
  },
  {
    name: "Fiat 126",
    price: 30000,
    mileage: 86000,
    power: 23,
    production: 1973,
    imageSrc: "./resources/img/126_ext.png",
    image2Src: "./resources/img/126_int.png",
  },
  {
    name: "Mikrus MR-300",
    price: 37000,
    mileage: 21000,
    power: 15,
    production: 1958,
    imageSrc: "./resources/img/mikrus1_ext.png",
    image2Src: "./resources/img/mikrus1_int.png",
  },
  {
    name: "Honda Civic I",
    price: 46500,
    mileage: 1450000,
    power: 54,
    production: 1972,
    imageSrc: "./resources/img/civici_ext.png",
    image2Src: "./resources/img/civici_int.png",
  },
  {
    name: "Škoda 110R",
    price: 77000,
    mileage: 3600,
    power: 62,
    production: 1980,
    imageSrc: "./resources/img/110r_ext.png",
    image2Src: "./resources/img/110r_int.png",
  },
  {
    name: "Lada 1500s",
    price: 42000,
    mileage: 70000,
    power: 75,
    production: 1978,
    imageSrc: "./resources/img/lada_ext.png",
    image2Src: "./resources/img/lada_int.png",
  },
  {
    name: "Dacia 1300",
    price: 28000,
    mileage: 100000,
    power: 54,
    production: 1974,
    imageSrc: "./resources/img/dacia_ext.png",
    image2Src: "./resources/img/dacia_int.png",
  },
  {
    name: "Polonez 1500",
    price: 16000,
    mileage: 88000,
    power: 70,
    production: 1979,
    imageSrc: "./resources/img/polonez1_ext.png",
    image2Src: "./resources/img/polonez1_int.png",
  },
  {
    name: "Tarpan 237",
    price: 10000,
    mileage: 15400,
    power: 50,
    production: 1986,
    imageSrc: "./resources/img/tarpan_ext.png",
    image2Src: "./resources/img/tarpan_int.png",
  },
];

const carContainer = document.getElementById("car_container");

cars.forEach((car) => {
  const carBox = document.createElement("div");
  carBox.classList.add("car_box");

  const carName = document.createElement("h2");
  carName.innerText = `${car.name}`;
  carBox.appendChild(carName);

  const carPhoto = document.createElement("img");
  carPhoto.src = car.imageSrc;
  carPhoto.alt = "Zdjęcie";
  carBox.appendChild(carPhoto);

  const carDesc = document.createElement("p");
  carDesc.innerText = `Cena: ${car.price}zł, przebieg: ${car.mileage}km, moc: ${car.power}KM`;
  carDesc.classList.add("overlay");
  carBox.appendChild(carDesc);

  const carBtn = document.createElement("button");
  carBtn.innerHTML = `Personalizuj`;
  carBtn.classList.add("pers_btn");
  carBtn.addEventListener("click", () => {
    saleRedirect(car);
  });
  carDesc.appendChild(carBtn);

  carContainer.appendChild(carBox);
});

function saleRedirect(cars) {
  window.localStorage.setItem("car", JSON.stringify(cars));
  window.location.href = "salecart.html";
}
