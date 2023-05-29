//Todo: page sys

const txtNewTask = document.querySelector('.inputNewTask');
const btnNewTask = document.querySelector('.taskCreatorBtn')
const ulTasks = document.querySelector('.tasks');

let liQuery; //Brute query


let tasksJson;
//Funcoes
function createTask(t)
{
    var li = document.createElement('li');
    var btnDel = document.createElement('input');
    btnDel.type = 'button';
    btnDel.value = 'apagar';
    console.log('Logando elementos: ', 'li: ', li, 'btn: ', btnDel);
    li.innerHTML = `${t}`
    console.log(li);
    ulTasks.appendChild(li);
    li.append(btnDel);
    btnDel.addEventListener('click', function ()
    {
        btnDel.parentElement.remove();
        serializeAsJson(ulTasks);
    })

}

function resetAndFocus(el)
{
    el.value = '';
    el.focus();
}

function serializeAsJson(Parent)
{
    let liArray = []; //Array parsed
    liQuery = querySelectedEl(Parent, 'li');

    for (let t of liQuery)
    {
        const clone = t.cloneNode(true);
        const buttonToBeDeleted = clone.querySelector('input[type = "button"]');
        clone.removeChild(buttonToBeDeleted);
        liArray.push(clone.innerHTML);
    }
    tasksJson = JSON.stringify(liArray);
    localStorage.setItem('tasks', tasksJson);
}

function deserializeJson()
{
    liArray = JSON.parse(localStorage.getItem('tasks'));

    for (let task of liArray)
    {
        createTask(task);
    }
    console.log('criou task?');
}

function querySelectedEl(Parent, child)
{
    let query = Parent.querySelectorAll(child);
    return query;
}




//adding ELs
btnNewTask.addEventListener('click', function ()
{
    if (!txtNewTask.value) return;
    createTask(txtNewTask.value);
    serializeAsJson(ulTasks);
    resetAndFocus(txtNewTask);
})

txtNewTask.addEventListener('keypress', function (e)
{
    if (e.keyCode === 13)
    {
        if (!txtNewTask.value) return;
        createTask(txtNewTask.value);
        serializeAsJson(ulTasks);
        resetAndFocus(txtNewTask);
    }
})

deserializeJson();