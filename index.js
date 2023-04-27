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
    name: "Mazda RX-7",
    price: 120000,
    mileage: 82000,
    power: 190,
    production: 1992,
    imageSrc: "./resources/img/rx7_ext.png",
  },
  {
    name: "Ford Falcon Sprint",
    price: 89000,
    mileage: 64000,
    power: 164,
    production: 1964,
    imageSrc: "./resources/img/fordf_ext.png",
  },
  {
    name: "Mercedes-Benz 450SL",
    price: 46000,
    mileage: 52000,
    power: 221,
    production: 1978,
    imageSrc: "./resources/img/450sl_ext.png",
  },
  {
    name: "Chevrolet Bel Air",
    price: 99000,
    mileage: 89000,
    power: 141,
    production: 1957,
    imageSrc: "./resources/img/belair_ext.png",
  },
  {
    name: "Dodge Challenger SRT8",
    price: 119000,
    mileage: 31800,
    power: 568,
    production: 2009,
    imageSrc: "./resources/img/srt8_ext.png",
  },
  {
    name: "Jeep Willys",
    price: 41000,
    mileage: 23000,
    power: 60,
    production: 1950,
    imageSrc: "./resources/img/willys_ext.png",
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
