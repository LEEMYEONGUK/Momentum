const toDoForm = document.getElementById("todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteTodo(event){
  // 아래로 버튼이 가리키는 타겟 확인 가능
  //console.dir(event.target)
  // console.log(event.target.parentElement)
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos()
}

function paintToDo(newTodo) {
  // console.log("I will pain", newTodo)
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerText = newTodo.text
  const button = document.createElement("button")
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo)
  li.appendChild(span)
  li.appendChild(button)
  toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
  event.preventDefault()
  const newTodo = toDoInput.value
  toDoInput.value = ""
  const newTodoObj = {
    text:newTodo,
    id:Date.now(),
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
  saveToDos()
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)
// console.log(saveToDos) 

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos)
  // console.log(parsedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}

