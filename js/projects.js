// =============================
// JSON 自動載入作品
// =============================


const projectList =
document.getElementById("projectList");



if(projectList){


fetch("data/projects.json")


.then(response => response.json())


.then(projects => {



    projects.forEach(project => {



        let card =
        document.createElement("section");



        card.className="card";



        card.innerHTML = `


        <h2>
        ${project.title}
        </h2>


        <img

        src="${project.image}"

        alt="${project.title}"

        class="project-image">



        <p>

        ${project.description}

        </p>



        <p>

        技術：

        ${project.technology.join("、")}

        </p>



        <button onclick="window.open('${project.demo}')">

        查看網站

        </button>



        <button onclick="window.open('${project.github}')">

        GitHub

        </button>


        `;



        projectList.appendChild(card);



    });



})


.catch(error=>{


console.log(
"作品資料讀取失敗",
error
);


});


}