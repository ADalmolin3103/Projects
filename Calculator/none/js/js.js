
this.display = document.querySelector('#display');
this.btnClear = document.querySelector('.btn.op.clear');
this.btnEq = document.querySelector('.btn.eq');


document.addEventListener('keyDown', e =>
{
    console.log(e.key);
    if (e.key == 'Enter')
    {
        display.value = calculate();
    }
    if (e.key == 'Backspace' || e.key == 'Delete')
    {
        deleteChar();
    }
})

document.addEventListener('click', e =>
{
    let elementClicked = e.target;
    console.log(elementClicked);
    if (elementClicked.classList.contains('btn'))
    {
        if (elementClicked.classList.contains('clear'))
        {
            resetDisplay();
        }
        else if (elementClicked.classList.contains('del'))
        {
            deleteChar();
        }
        else if (elementClicked.classList.contains('eq'))
        {
            display.value = calculate();
        }
        else
        {
            btnToDisplay(elementClicked);
        }

    }
});
function calculate()
{
    try
    {
        if (eval(this.display.value) == undefined) return 'E: not a expression'
        return eval(this.display.value);
    }
    catch (error)
    {
        return 'E: not a expression'
    }
}

let resetDisplay = function ()
{
    display.value = '';
}

let deleteChar = function ()
{
    display.value = display.value.slice(0, -1);
}

let btnToDisplay = function (elementClicked)
{
    this.display.value += elementClicked.value;
    this.display.focus()
}
