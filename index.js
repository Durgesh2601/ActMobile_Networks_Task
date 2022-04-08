showtoast();
function showtoast() {
  let toastElList = [].slice.call(document.querySelectorAll(".toast"));
  let toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl);
  });
  toastList.forEach((toast) => toast.show());
}

let time = new Date().getHours();
let msg = document.getElementById("greeting");
if (time >= 0 && time < 12) {
  msg.textContent = "Good Morning, Guest!";
} else if (time > 12 && time < 18) {
  msg.textContent = "Good Afternoon, Guest!";
} else {
  msg.textContent = "Good Evening, Guest!";
}
let id;
function debounce(func, delay) {
  clearTimeout(id);

  id = setTimeout(function () {
    func();
  }, delay);
}
function changeColor() {
  let input = document.getElementById("input").value;
  if (input.length === 0) {
    document.body.style.backgroundColor = "white";
  }
  document.body.style.backgroundColor = `${input}`;
}
