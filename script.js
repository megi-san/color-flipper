const hexBtn = document.querySelector(".hex"),
  r1 = /rgb.(\d+),(\d+),(\d+)./,
  r2 = /#.{6}/,
  rgbBtn = document.querySelector(".rgb");
btn = document.querySelector(".btn");

btn.addEventListener("click", randomRgb);
function randomRgb() {
  let r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256),
    color = `rgb(${r},${g},${b})`;
  document.querySelector("span").textContent = `${color}`;
  let bgColor = document.querySelector("span").textContent;
  document.body.style.backgroundColor = bgColor;
  hexBtn.addEventListener("click", hex);
  rgbBtn.removeEventListener("click", rgb);
  return color;
}

function randomHex() {
  let r = Math.floor(Math.random() * 256).toString(16),
    g = Math.floor(Math.random() * 256).toString(16),
    b = Math.floor(Math.random() * 256).toString(16);
if (r.length == 1) {
    r = "0" + r;
  }
  if (g.length == 1) {
    g = "0" + g;
  }
  if (b.length == 1) {
    b = "0" + b;
  }  let color = `#${r}${g}${b}`;
  document.querySelector("span").textContent = `${color}`;
  let bgColor = document.querySelector("span").textContent;
  document.body.style.backgroundColor = bgColor;
  hexBtn.removeEventListener("click", hex);
  rgbBtn.addEventListener("click", rgb);
  return color;
}

function hex() {
  let color = document.querySelector("span").textContent;
  let slis = color.slice(4, color.length - 1),
    btn = document.querySelector(".btn"),
    arrx = slis.split(",");
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  function componentToHex(c) {
    var hex = Number(c).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  res = rgbToHex(arrx[0], arrx[1], arrx[2]);
  document.querySelector("span").textContent = res;
  if (r2.test(document.querySelector("span").textContent) == true) {
    hexBtn.removeEventListener("click", hex);
    rgbBtn.addEventListener("click", rgb);
  }
  btn.removeEventListener("click", randomRgb);
  btn.addEventListener("click", randomHex);
  return res;
}
rgb();
function rgb() {
  let color = document.querySelector("span").textContent,
    r3 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    arr = r3.exec(color),
    btn = document.querySelector(".btn"),
    r = parseInt(arr[1], 16),
    g = parseInt(arr[2], 16),
    b = parseInt(arr[3], 16),
    res = `rgb(${r},${g},${b})`;
  document.querySelector("span").textContent = res;
  if (r1.test(document.querySelector("span").textContent) == true) {
    hexBtn.addEventListener("click", hex);
    rgbBtn.removeEventListener("click", rgb);
  }
  btn.addEventListener("click", randomRgb);
  btn.removeEventListener("click", randomHex);
  return res;
}
hex();

const searchBtn = document.querySelector(".coder"),
  nav = document.querySelector("nav"),
  hexSearchBtn = document.querySelector(".hexsearch"),
  rgbSearchBtn = document.querySelector(".rgbsearch"),
  cont = document.querySelector(".container"),
  contrgb = document.querySelector(".container6"),
  conthex = document.querySelector(".container4"),
  cancelBtn = document.querySelectorAll(".cbtn");

searchBtn.addEventListener("click", function () {
  nav.classList.toggle("height");
});
hexSearchBtn.addEventListener("click", function () {
  nav.classList.remove("height");
  cont.style.display = "none";
  conthex.style.display = "block";
  contrgb.style.display = "none";
});
rgbSearchBtn.addEventListener("click", function () {
  nav.classList.remove("height");
  cont.style.display = "none";
  contrgb.style.display = "block";
  conthex.style.display = "none";
});
for (let i = 0; i < cancelBtn.length; i++) {
  cancelBtn[i].addEventListener("click", function () {
    cont.style.display = "block";
    contrgb.style.display = "none";
    conthex.style.display = "none";
  });
}
const hexboot = document.querySelector(".hexbtn"),
  rgbboot = document.querySelector(".rgbbtn"),
  spann = document.querySelector("span").textContent;

hexboot.addEventListener("click", function () {
  if (
    /#([1-9a-fA-F]{3}|[1-9a-fA-F]{6})/.test(
      document.querySelector(".four").value
    )
  ) {
    cont.style.display = "block";
    conthex.style.display = "none";
    document.querySelector("span").textContent =
      document.querySelector(".four").value;
    document.body.style.backgroundColor = document.querySelector(".four").value;
    hexBtn.removeEventListener("click", hex);
    rgbBtn.addEventListener("click", rgb);
  }
});
rgbboot.addEventListener("click", function () {
  if (
    document.querySelector(".one").value <= 255 &&
    document.querySelector(".two").value <= 255 &&
    document.querySelector(".three").value <= 255
  ) {
    const one = parseInt(document.querySelector(".one").value),
      two = parseInt(document.querySelector(".two").value),
      three = parseInt(document.querySelector(".three").value),
      cl = `rgb(${one},${two},${three})`;
    cont.style.display = "block";
    contrgb.style.display = "none";
    document.querySelector("span").textContent = cl;
    document.body.style.backgroundColor = cl;
    hexBtn.addEventListener("click", hex);
    rgbBtn.removeEventListener("click", rgb);
  }
});
let reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  cont.style.display = "block";
  contrgb.style.display = "none";
  conthex.style.display = "none";
  document.querySelector("span").textContent = "#F1f5f8";
  document.body.style.backgroundColor = "#F1f5f8";
});
