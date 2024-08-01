let EndDate = "31 ,aug, 2024, 04:15:30 PM";
document.querySelector("h2").innerText = EndDate;
let exp = document.querySelector(".Date-exp");

let boxs = document.querySelectorAll(".box");

let count = () => {
  let end = new Date(EndDate);
  let Now = new Date();
  let diff = (end - Now) / 1000;

  if (diff < 0) {
    return;
  }

  boxs[0].innerText = Math.floor(diff / 3600 / 24);
  boxs[1].innerText = Math.floor((diff / 3600) % 24);
  boxs[2].innerText = Math.floor((diff / 60) % 60);
  boxs[3].innerText = Math.floor(diff) % 60;
};
count();

let set = setInterval(() => {
  count();
}, 1000);
