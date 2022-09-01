
// create empty array for list items
// create input for user to enter item
// create button to push item to array
// display items
// have option to mark item as completed
// move completed items to another array
// display completed items


let items = []

const newItemEl = document.getElementById("newItem-el")
const addBtnEl = document.getElementById("addBtn-el")
const todoListEl = document.getElementById("todoList-el")
const removeBtnEl = document.getElementById("removeBtn-el")

addBtnEl.addEventListener("click", function() {
  items.push(newItemEl.value)
  console.log(items)
  render()
  newItemEl.value = ""
})

function render() {
  todoListEl.innerHTML += `
    <ul id='todoUl'>
      <li id='todoLi'>
        <input type='checkbox'> 
        ${items[items.length - 1]}
      </li>
    </ul>
    <button id='removeBtn-el'>REMOVE ITEM</button>
  `
}

