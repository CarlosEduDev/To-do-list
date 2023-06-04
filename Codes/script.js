const button = document.querySelector('.button-task');
const input = document.querySelector('.input-task');
const listaCompleta = document.querySelector('.list-task')

let minhaListaTasks = []

function addNewTask(){
   minhaListaTasks.push({
      task: input.value,
      concluida: false
   })

   input.value = ''

   mostrarTasks()
}

function mostrarTasks(){

   let newLi = ''

   minhaListaTasks.forEach((item, position) => {

      newLi = newLi + `<li class="task ${item.concluida && "done"}">
      <img src="./img/checked.png" alt="Check-tarefa" onclick="concluirTask(${position})">
      <p>${item.task}</p>
      <img src="./img/trash.png" alt="imagem de lixeira" onclick="deleteItem(${position})">
   </li>`
   })

   listaCompleta.innerHTML = newLi;
  
   localStorage.setItem('Lista', JSON.stringify(minhaListaTasks))
}

function concluirTask(position){
  minhaListaTasks[position].concluida =  !minhaListaTasks[position].concluida;

  mostrarTasks();
}

function deleteItem(position){
   minhaListaTasks.splice(position, 1)
   mostrarTasks()
}

function recarregarTasks(){
   const tasksLocalStorage = localStorage.getItem('Lista')

   if(tasksLocalStorage){

      minhaListaTasks = JSON.parse(tasksLocalStorage)
   }
  

   mostrarTasks()

   console.log(tasksLocalStorage)
}

recarregarTasks()

button.addEventListener('click', addNewTask)