
// create empty array for list items
// create input for user to enter item
// create button to push item to array
// display items
// have option to mark item as completed
// move completed items to another array
// display completed items

let items = []

const enterKey = document.querySelector("#newItem-el")
const newItemEl = document.getElementById("newItem-el")
const addBtnEl = document.getElementById("addBtn-el")
const todoListEl = document.getElementById("todoList-el")
const removeBtnEl = document.getElementById("removeBtn-el")
//let item = document.getElementById("item")



addBtnEl.addEventListener("click", function() {
  if(newItemEl.value){
    items.push(newItemEl.value)
    console.log(items)
    render()
    newItemEl.value = ""
    console.log(newItemEl.value)
  }
})

enterKey.addEventListener("keyup", (e) => {
  if(newItemEl.value){
    if (e.keyCode === 13) {
      items.push(newItemEl.value)
      console.log(items)
      render()
      newItemEl.value = ""
    }
  }
})

function render() {
  let listItems = ""
  for (let i = 0; i < items.length; i++) {
    listItems += `
        <li id="todoLi">
          <label for="item"> 
            <input type="checkbox" id="item" name="item"> ${items[i]} 
          </label>
        </li>
      `
  }
  todoListEl.innerHTML = listItems
}

// when button is pushed, item disappears
removeBtnEl.addEventListener("click", function() {
  const item = document.querySelector("#item")
  
})
