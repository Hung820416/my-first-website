// =============================
// 訪客計數
// =============================


let count = localStorage.getItem("visitors");


if(count == null){

    count = 1;

}

else{

    count++;

}


localStorage.setItem("visitors",count);



const visitor =
document.getElementById("visitorCount");


if(visitor){

    visitor.textContent=count;

}
