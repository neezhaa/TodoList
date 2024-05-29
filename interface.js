$(document).ready(function(){
    $('#form').on('submit',function(event){
        event.preventDefault();
    })
 
})
const container = document.getElementById("display-task"); 


function Add(){
    const row = document.createElement("p");
    const rowTask = document.createElement("span");
    const btns = document.createElement("div");
    var task =  document.getElementById("task").value; 
    console.log(task)

    rowTask.textContent = task;
    row.appendChild(rowTask);
    container.appendChild(row);
    row.setAttribute("class", 'alert alert-warning  rounded-0');
    row.style.display = "flex";
    row.style.justifyContent = "space-between";
    row.style.alignItems = "center";


    const statut = document.createElement('button');
    statut.textContent = 'Undo';
    statut.setAttribute("class", 'btn btn-primary rounded-0 ms-4')
    btns.appendChild(statut);


    const del = document.createElement('button');
    del.textContent = 'x';
    // del.onclick = function(){supprimer(this);};
    
    del.setAttribute("class", 'btn btn-danger rounded-0 ');

    btns.appendChild(del);
    row.appendChild(btns);

    del.addEventListener("click", function(){
        btns.parentElement.remove()
    })
}
// function supprimer(button){
//     const ligne = button.parentElement;
//     ligne.removeChild(ligne);
// }

