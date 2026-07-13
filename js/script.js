// =============================
// 聯絡按鈕
// =============================

const contactBtn = document.getElementById("contactBtn");

const title = document.getElementById("title");

const profileImg = document.getElementById("profileImg");


if(contactBtn){

    contactBtn.addEventListener("click", function(){

        if(title){

            title.textContent = "歡迎來到振宏的程式世界！";

        }


        document.body.style.backgroundColor = "#28ee01";


        if(profileImg){

            profileImg.src = "images/new.jpg";

        }

    });

}


// =============================
// 回到頂端
// =============================

const topBtn = document.getElementById("topBtn");


if(topBtn){


    window.addEventListener("scroll", function(){


        if(window.scrollY > 300){

            topBtn.style.display = "block";

        }

        else{

            topBtn.style.display = "none";

        }


    });



    topBtn.addEventListener("click", function(){


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}





// =============================
// 作品分類
// =============================


const filterBtns =
document.querySelectorAll(".filterBtn");


const projects =
document.querySelectorAll(".project");


if(filterBtns.length > 0){


filterBtns.forEach(function(btn){


    btn.addEventListener("click",function(){


        let category =
        this.textContent;



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


}




// =============================
// 作品搜尋
// =============================


const searchInput =
document.getElementById("searchInput");



if(searchInput){


    const projectCards =
    document.querySelectorAll(".project");


    searchInput.addEventListener("input",function(){


        let keyword =
        this.value.toLowerCase();



        projectCards.forEach(function(card){


            let text =
            card.innerText.toLowerCase();



            if(text.includes(keyword)){


                card.style.display="block";


            }

            else{


                card.style.display="none";


            }


        });


    });


}







// =============================
// Lightbox 圖片放大
// =============================


function openImage(src){


    const lightbox =
    document.getElementById("lightbox");


    const img =
    document.getElementById("lightboxImg");


    if(lightbox && img){


        img.src = src;


        lightbox.style.display="flex";


    }


}



function closeImage(){


    const lightbox =
    document.getElementById("lightbox");


    if(lightbox){


        lightbox.style.display="none";


    }


}



