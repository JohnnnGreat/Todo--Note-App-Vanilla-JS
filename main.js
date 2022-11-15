// Adding functionalities for the two buttons
let addTodo = document.querySelector('.addTodo');
let addNote = document.querySelector('.addNote')
let addTodoCard = document.querySelector('#todoBtn');
let todoItem = document.getElementById('todo');
let todoList = document.querySelector('.display-todo');
let noteList = document.querySelector('.display-note');
let itemDisplay = document.querySelector('#todoIdvItem');
let todoParent = document.querySelector('.display-todo');
let noteParent = document.querySelector('.display-note');
let cover = document.querySelector('.cover');
let btnTodo = document.querySelector('#btn-addTodo');
let btnNote = document.querySelector('#btn-addNote');
let subNote = document.getElementById('noteBtn');
let title = document.getElementById('todoN');
let text = document.getElementById('textNote');
let noError = true

setTimeout(function(){
    cover.style.display = 'none';
    document.getElementById('tag').style.display = 'none'
}, 4000)

function openTodo(){
    addTodo.style.display = 'block'
    cover.style.display = 'block'
}

function openNote(){
    addNote.style.display = 'block'
    cover.style.display = 'block'
}


function todoDetails(todoId, todoItem){
    return {
        todoId:todoId,
        todoItem:todoItem 
    }
}

function noteDetails(title, note){
    return {
        title:title,
        note:note
    }
}

noteDetails.prototype = todoDetails;

let todoArr = []


btnNote.addEventListener('click', openNote)
btnTodo.addEventListener('click', openTodo)

//function to checked input validation


function textField(input){
    if(input.value == ""){
        console.error("Input can't be empty")
        return false
    }else {
        return true
    }
}

subNote.addEventListener('click', function(){
   
    let titleN = title.value
    let noteDe = text.value

    if(titleN == "" && noteDe == ""){
        let error = document.getElementById('error')
            error.innerText = 'Input cannot be empty'
            error.style.display = 'block'
            setTimeout(() => {
                error.style.display = 'none' 
            }, 2000);
    }else {
        addNote.style.display = 'none'
        cover.style.display = 'none'
        displayNoteList()
    }
})
addTodoCard.addEventListener('click', function(){
    let todo = textField(todoItem)
    if(!todo){
        
            let error = document.getElementById('error')
            error.innerText = 'Input cannot be empty'
            error.style.display = 'block'
            setTimeout(() => {
                error.style.display = 'none' 
            }, 2000);
     } else {
        addTodo.style.display = 'none'
        cover.style.display = 'none'
        
        displayTodoList()

        //Working under the hood to display todo List
     }
})

// let todoF;
// let x = "john"
// let name = ''
// for (const a of x) {
//     console.log(a);
    
//     name.concat(a)

// }
// ;
function displayNoteList(){
 
    let x = new noteDetails(title.value, text.value);
    noteParent.insertAdjacentHTML('beforeend', `
                                        <div>
                                        <h3> ${x.title}</h3>
                                        <p> ${x.note}</p>
                                        <button class="btn-deleteNote">delete</button>

                                        </div>
                                    `)
    noteList.style.opacity = '1'
    deleteNote()

}
function displayTodoList() {
    let id = Math.floor(Math.random()*5000)
    let todoValue = todoItem.value
    todoF = new todoDetails(id, todoValue);
    todoParent.insertAdjacentHTML('beforeend', `
                                    <div>
                                <p id="todoIdvItem">${todoF.todoItem}</p>
                                <button class="btn-delete">delete</button>
                                </div>
                                `)

    todoList.style.display = 'flex'
    
    localStorage.setItem('todo', todoF.todoItem)
    deleteTodo()
    
}

//function to delete a todo 


function deleteTodo(){

    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function(){
            btn.parentElement.remove();
        })
    });
}

function deleteNote(){
    document.querySelectorAll('.btn-deleteNote').forEach(btn => {
        btn.addEventListener('click', function(){
            btn.parentElement.remove();
        })
    });
}













