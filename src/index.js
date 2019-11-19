document.addEventListener("DOMContentLoaded", () => {

  let form = document.querySelector('#create-task-form');
  let textBox = document.querySelector('#new-task-description');
  let tasks = document.querySelector('#tasks');
  let submitButton = document.querySelector("input[type='submit']")

  submitButton.addEventListener('click', handleForm);

  function handleForm(event) {
    event.preventDefault();
    createListItem()
  }

  function createListItem() {
    let li = document.createElement('li');
    li.innerHTML = textBox.value;
    let deleteButton = document.createElement('BUTTON');
    deleteButton.innerHTML = 'X';
    deleteButton.addEventListener('click', deleteListItem);
    li.appendChild(deleteButton);
    tasks.appendChild(li);
  }

  function deleteListItem(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode)
  }


});
