// =============================
// 深色模式
// =============================

const darkBtn = document.getElementById("darkBtn");


if(darkBtn){

    darkBtn.addEventListener("click", function(){

        document.body.classList.toggle("dark");


    });

}
