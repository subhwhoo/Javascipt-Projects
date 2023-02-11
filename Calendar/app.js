const monthsInx = new Date().getMonth();
const monthsEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

// const lastDayEl = new Date();

const lastDayEl = new Date(
  new Date().getFullYear(),
  monthsInx + 1,
  0
).getDate();
const firstDayEl =
  new Date(new Date().getFullYear(), monthsInx, 1).getDay() - 1;
console.log(firstDayEl);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

monthsEl.innerText = months[monthsInx];
fullDateEl.innerText = new Date().toDateString();

let days = "";

for (let i = firstDayEl; i > 0; i--) {
  days += `<div class="empty"></div>`;
}

for (let i = 1; i <= lastDayEl; i++) {
  days += `<div>${i}</div>`;
}

daysEl.innerHTML = days;
