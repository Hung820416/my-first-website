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
//作品搜尋功能

const searchInput = document.getElementById("searchInput");


if(searchInput){


    const projectCards = document.querySelectorAll(".project");


    searchInput.addEventListener("input", function(){


        let keyword = this.value.toLowerCase();



        projectCards.forEach(function(card){


            let text = card.innerText.toLowerCase();



            if(text.includes(keyword)){


                card.style.display = "block";


            }else{


                card.style.display = "none";


            }


        });


    });


}
// 打字效果


const typingText = "歡迎來到我的網站";


const typingElement = document.getElementById("typing");


let typingIndex = 0;



function typing(){

    if(typingElement && typingIndex < typingText.length){


        typingElement.innerHTML += typingText[typingIndex];


        typingIndex++;


        setTimeout(typing,150);


    }


}



typing();
// Scroll Reveal


const reveals =
document.querySelectorAll(".reveal");



function reveal(){

    reveals.forEach(function(item){


        let windowHeight =
        window.innerHeight;


        let elementTop =
        item.getBoundingClientRect().top;



        if(elementTop < windowHeight - 100){


            item.classList.add("active");


        }


    });


}



window.addEventListener(
"scroll",
reveal
);



reveal();
function openImage(src) {

    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImg");

    if (!lightbox || !img) return;

    img.src = src;
    lightbox.style.display = "flex";
}

function closeImage() {

    const lightbox = document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    }
}