/*
 * your javascript goes here

referencia: https://www.youtube.com/watch?v=DIVfDZZeGxM

*/



document.getElementById('form').addEventListener('submit', saveTodo);


function saveTodo(e){
//alert("yes");
  let todo = document.getElementById('finput').value;

  // console.log(todo);
 
let tarefa = { 

  name: todo

}



//console.log(tarefa);

if(localStorage.getItem('tarefas') === null){

  let tarefas = [];

  tarefas.push(tarefa);

  localStorage.setItem('tarefas', JSON.stringify(tarefas));

} else {

let tarefas = JSON.parse(localStorage.getItem('tarefas'));

tarefas.push(tarefa);

localStorage.setItem('tarefas', JSON.stringify(tarefas));

}
  fetchTarefas();
  //previne que o form envie a info pro caralho... 
  e.preventDefault();
}




  
function deletar(name){

      let tarefas = JSON.parse(localStorage.getItem('tarefas'));

       for( let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].name == name){
            tarefas.splice(i, 1);
        }

      }
    
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    fetchTarefas(); 
}






function fetchTarefas(){




let tarefas = JSON.parse(localStorage.getItem('tarefas'));

let tarefasShow = document.getElementById('tarefasShow');

tarefasShow.innerHTML = '';
 
for (let i = 0; i < tarefas.length; i++) {
 
  let name = tarefas[i].name;

  tarefasShow.innerHTML += '<li>'+
                            name  +'<i style="visibility: hidden;" >_</i>'+'<a onclick="deletar(\''+name+'\')" class="del" href="#">X</a>'+
                            '</li>'; 

}


}
