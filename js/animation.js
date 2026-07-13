// =============================
// Loading
// =============================


window.addEventListener("load",function(){


    const loader = document.getElementById("loader");


    if(loader){


        setTimeout(function(){


            loader.style.display="none";


        },1000);


    }


});




if(menuBtn && navMenu){


    menuBtn.addEventListener("click",function(){


        navMenu.classList.toggle("active");


    });


}

// =============================
// 打字效果
// =============================


const typingText =
"歡迎來到我的網站";


const typingElement =
document.getElementById("typing");


let typingIndex = 0;



function typing(){


    if(typingElement &&
       typingIndex < typingText.length){


        typingElement.innerHTML +=
        typingText[typingIndex];


        typingIndex++;


        setTimeout(typing,150);


    }


}


typing();

// =============================
// Scroll Reveal
// =============================


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

