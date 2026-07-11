const button = document.getElementById("contactBtn");

const title = document.getElementById("title");

const image = document.getElementById("profileImg");

const darkBtn = document.getElementById("darkBtn");


button.addEventListener("click", function() {

    title.textContent = "歡迎來到振宏的程式世界！";

    document.body.style.backgroundColor = "#28ee01";

    image.src = "images/new.jpg";

});


darkBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

});