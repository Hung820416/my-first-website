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
const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});



topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
window.addEventListener("load",function(){

    const loader = document.getElementById("loader");


    setTimeout(function(){

        loader.style.display="none";

    },1000);


});
const menuBtn =
document.getElementById("menuBtn");


const navMenu =
document.getElementById("navMenu");



menuBtn.addEventListener("click",function(){

    navMenu.classList.toggle("active");

});

//作品分類


const filterBtns =
document.querySelectorAll(".filterBtn");


const projects =
document.querySelectorAll(".project");



filterBtns.forEach(function(btn){


btn.addEventListener("click",function(){



let category=this.textContent;



projects.forEach(function(project){


if(category=="全部"){

project.style.display="block";

}


else if(project.classList.contains(category.toLowerCase())){

project.style.display="block";

}


else{

project.style.display="none";

}


});



});



});
// 訪客計數器


let count = localStorage.getItem("visitors");



if(count == null){

    count = 1;

}

else{

    count++;

}



localStorage.setItem("visitors", count);



const visitor =
document.getElementById("visitorCount");



if(visitor){

    visitor.textContent = count;

}