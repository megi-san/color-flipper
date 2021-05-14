const hexBtn = document.querySelector(".hex"),
  r1 = /rgb.(\d+),(\d+),(\d+)./,
  r2 = /#.{6}/,
  rgbBtn = document.querySelector(".rgb");
btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
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
});

function hex() {
  let color = document.querySelector("span").textContent;
  let slis = color.slice(4, color.length - 1),
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
  return res;
}
rgb();
function rgb() {
  let color = document.querySelector("span").textContent,
    r3 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    arr = r3.exec(color),
    r = parseInt(arr[1], 16),
    g = parseInt(arr[2], 16),
    b = parseInt(arr[3], 16),
    res = `rgb(${r},${g},${b})`;
  document.querySelector("span").textContent = res;
  if (r1.test(document.querySelector("span").textContent) == true) {
    hexBtn.addEventListener("click", hex);
    rgbBtn.removeEventListener("click", rgb);
  }
  return res;
}
hex();
