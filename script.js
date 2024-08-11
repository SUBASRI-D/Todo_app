let inputField= document.getElementById("input");
let button = document.getElementById("add");
let notesList=document.getElementById("notesList");
function addTodo()
{
    let inputValue=inputField.value.trim();

    if(inputValue!==""){
        let list = document.createElement('li');
    
        list.textContent=inputField.value.trim();
        notesList.appendChild(list);
        console.log(inputField.value);

    }
}