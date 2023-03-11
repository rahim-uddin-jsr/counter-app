document.getElementById("count").innerText = 0;
const reset = () => {
  localStorage.setItem("count", 0);
  document.getElementById("count").innerText = 0;
};
if (localStorage.getItem("count") === null) {
  document.getElementById("count").innerText = 0;
} else {
  document.getElementById("count").innerText = localStorage.getItem("count");
}
let count;
document.getElementById("increase-btn").addEventListener("click", () => {
  count = parseInt(document.getElementById("count").innerText);
  count++;
  localStorage.setItem("count", count);
  document.getElementById("count").innerText = count;
});
