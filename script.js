let image = document.getElementById("mainphoto");
imagearr = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];
let counter = 1;
setInterval(() => {
  image.src = imagearr[counter];
  counter++;
  if (counter == 7) {
    counter = 0;
  }
}, 3000);

let imageHeader = document.getElementById("image-heading");
let login = document.querySelector(".loginpage");
let btns = document.querySelectorAll(".btn");
let signup = document.querySelector(".signup-page");
let rentcover = document.querySelector(".rent-cover");
let requestMovie = document.querySelector(".container-request-movie");
let requestBtn = document.querySelector(".req-btn");
let bookcover = document.querySelector(".booking-cover");
let confirmcover = document.querySelector(".confirm-cover");
let rentbtn = document.getElementById("rent-btn");
let bookbtn1 = document.getElementById("bookbtn1");
let bookbtn2 = document.getElementById("bookbtn2");
let timebtn1 = document.getElementById("timebtn1");
let timebtn2 = document.getElementById("timebtn2");
let timebtn3 = document.getElementById("timebtn3");
let timebtn4 = document.getElementById("timebtn4");
let timebtn5 = document.getElementById("timebtn5");
let placebtn1 = document.getElementById("placebtn1");
let placebtn2 = document.getElementById("placebtn2");
let placebtn3 = document.getElementById("placebtn3");
let placebtn4 = document.getElementById("placebtn4");
let placebtn5 = document.getElementById("placebtn5");
let placebtn6 = document.getElementById("placebtn6");

rentbtn.addEventListener("click", () => {
  rentcover.style.display = "none";
});

function displayloginform() {
  login.style.display = "flex";
}
function displaysignupform() {
  signup.style.display = "flex";
}
function disappearpopup() {
  login.style.display = "none";
  signup.style.display = "none";
  btns.forEach((value) => {
    value.style.display = "none";
  });
}
function showrent() {
  rentcover.style.display = "flex";
}
function showtheatre() {
  bookcover.style.display = "flex";
}
function disappeartheatre() {
  showconfirmation();
  bookcover.style.display = "none";
}
function change() {
  bookbtn1.style.backgroundColor = "crimson";
  bookbtn1.style.color = "white";
  bookbtn1.style.border = "none";
}
function change2() {
  bookbtn2.style.backgroundColor = "crimson";
  bookbtn2.style.color = "white";
  bookbtn2.style.border = "none";
}
function timechange(value) {
  switch (value) {
    case 1:
      timebtn1.style.backgroundColor = "crimson";
      timebtn1.style.color = "white";
      timebtn1.style.border = "none";
      break;
    case 2:
      timebtn2.style.backgroundColor = "crimson";
      timebtn2.style.color = "white";
      timebtn2.style.border = "none";
      break;
    case 3:
      timebtn3.style.backgroundColor = "crimson";
      timebtn3.style.color = "white";
      timebtn3.style.border = "none";
      break;
    case 4:
      timebtn4.style.backgroundColor = "crimson";
      timebtn4.style.color = "white";
      timebtn4.style.border = "none";
      break;
    case 5:
      timebtn5.style.backgroundColor = "crimson";
      timebtn5.style.color = "white";
      timebtn5.style.border = "none";
      break;
  }
}
function place(value){
  if(value == 1){
    placebtn1.style.backgroundColor = "crimson";
    placebtn1.style.color = "white";
    placebtn1.style.border = "none";
  }
  else if(value == 2){
    placebtn2.style.backgroundColor = "crimson";
    placebtn2.style.color = "white";
    placebtn2.style.border = "none";
  }
  else if(value == 3){
    placebtn3.style.backgroundColor = "crimson";
    placebtn3.style.color = "white";
    placebtn3.style.border = "none";
  }
  else if(value == 4){
    placebtn4.style.backgroundColor = "crimson";
    placebtn4.style.color = "white";
    placebtn4.style.border = "none";
  }
  else if(value == 5){
    placebtn5.style.backgroundColor = "crimson";
    placebtn5.style.color = "white";
    placebtn5.style.border = "none";
  }
  else if(value == 6){
    placebtn6.style.backgroundColor = "crimson";
    placebtn6.style.color = "white";
    placebtn6.style.border = "none";
  }
}
function showconfirmation(){
  confirmcover.style.display = "flex";
}
function disappearconfirmation(){
  confirmcover.style.display = "none";
}
function closereqMovie(){
  requestMovie.style.display = "none";
}
function showReqMovie(){
  let name = document.getElementById('movieName').value;
  let director = document.getElementById('DirectorName').value;
  document.getElementById('movie').textContent = name;
  document.getElementById('director').textContent = director;

  requestMovie.style.display = "flex";
}
