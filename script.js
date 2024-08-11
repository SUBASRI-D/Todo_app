let inputField= document.getElementById("input");  //getting input value and store it in inputfield  using id name
let button = document.getElementById("add");       //getting button  using id name
let notesList=document.getElementById("notesList");//geetin ul by using id name
function addTodo()  //function(it will execute when user click the button)
{
    let inputValue=inputField.value.trim(); //remove the space from the user input

    if(inputValue!==""){    //there is no space in the input bix if block is executed
        let list = document.createElement('li');  //getting the element from the inputfiled and store it into list
   
    
        list.textContent=inputField.value.trim(); //remove the space
        list.innerHTML=` ${inputValue}<button class="delete">Delete </button>`;//adding delete button

        notesList.appendChild(list); // append the list value into ul list(notesList )
    
      
        inputField.value="";  //remove the value from the input box after printding it into list
        
    }
}
document.addEventListener("click",(events)=>{  //function for delete button
    if(events.target.classList.contains("delete")) //if the user click the button do the below operation
    {
        events.target.parentElement.remove();  //remove the added value
    }
})