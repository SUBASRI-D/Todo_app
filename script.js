let inputField= document.getElementById("input");  
let button = document.getElementById("add");       
let notesList=document.getElementById("notesList");
function addTodo() 
{
    let inputValue=inputField.value.trim(); 

    if(inputValue!==""){   
        let list = document.createElement('li');  
   
    
        list.textContent=inputField.value.trim(); 
        list.innerHTML=` ${inputValue}<button class="delete">Delete </button>`;

        notesList.appendChild(list); 
    
      
        inputField.value="";  
        
    }
}
document.addEventListener("click",(events)=>{  
    if(events.target.classList.contains("delete")) 
    {
        events.target.parentElement.remove();  
    }
})