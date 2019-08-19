const search = document.querySelector('#search-text');

// Grabs the ul
const listGroup = document.querySelector('.list-group');

// Grabs the input that the user types in
const formAdd = document.querySelector('#add');

const deleteItems = document.querySelectorAll('.delete');


// Adding an todo item
formAdd.addEventListener('submit', (e) => {
    // Stores what the user types in
    let userInput = document.querySelector('#add-text').value.trim();

    // Creates a new li 
    let li = document.createElement('li');

    // Stores what the user typed in
    let liText = document.createTextNode(userInput);

    // Append text user typed in to the new li
    li.appendChild(liText);

    // Adds the classes needed for the li
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');

    // Insert the delete button in between the new lis 
    li.innerHTML += `
        <a class="delete-btn" href="#"><i class="fas fa-trash delete"></i></a>
    `;

    if(userInput === ''){
        e.preventDefault();
    } else {
        // Adds the newly created lis to the document
        listGroup.appendChild(li);
        e.preventDefault()
        formAdd.reset();
    }    
});


// Deletes an todo item
listGroup.addEventListener('click', (e) => {
    if(e.target && e.target.matches('.delete')){
      e.target.parentNode.parentNode.remove();
  }
});

// Filter
search.addEventListener('keyup', () => {
    let searchValue = search.value.toUpperCase();

    let listItems = document.getElementsByClassName('list-group-item');
   
    for(let i = 0; i < listItems.length; i++) {
        let itemName = listItems[i].textContent;
        if(itemName.toUpperCase().indexOf(searchValue) > -1) {
            listItems[i].classList.add('d-flex');
        } else {
            listItems[i].classList.remove('d-flex');
            listItems[i].classList.add('d-none');
        }
    }
});