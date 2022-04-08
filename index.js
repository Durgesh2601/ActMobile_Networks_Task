showtoast();
 function showtoast () {
    let toastElList = [].slice.call(document.querySelectorAll('.toast'))
    let toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
}

let time = new Date().getHours();
let msg = document.getElementById("greeting");
if(time >= 0 && time < 12) {
    msg.textContent = "Good Morning, Guest!"
}
else if(time > 12 && time < 18) {
    msg.textContent = "Good Afternoon, Guest!";
} else {
    msg.textContent = "Good Evening, Guest!";
}