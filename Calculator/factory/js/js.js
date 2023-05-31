function createCalculator()
{
    return {
        /* Attributes: */
        display: document.querySelector('#display'),
        btnClear: document.querySelector('.btn.op.clear'),
        btnEq: document.querySelector('.btn.eq'),

        start()
        {
            this.buttonClick();
            this.enterClick();
        },

        buttonClick()
        {
            /* Arrow functions do not change the object invoker (THIS) */
            //Using function(changes invoked object below to document (since document calls func, this=document))
            /* Since i am using a arrow function, the this will always be the one who created the object (in this case calculator in claculator = createCalculator(); ) */
            document.addEventListener('click', e =>
            {
                const elementClicked = e.target;
                if (elementClicked.classList.contains('btn'))
                {
                    if (elementClicked.classList.contains('clear'))
                    {
                        this.resetDisplay();
                    }
                    else if (elementClicked.classList.contains('del'))
                    {
                        //The alternative below would require a variable called displayValue, that would only be used here, trashing memory and using resources everytime any button would be pressed.
                        //this.display.value = this.display.value.slice(0, displayValue.length-1);
                        this.display.value = this.display.value.slice(0, -1);
                    }
                    else if (elementClicked.classList.contains('eq'))
                    {
                        this.display.value = this.calculate();
                    }
                    else
                    {
                        this.display.value += elementClicked.value;
                    }

                }
            });
        },

        enterClick()
        {
            document.addEventListener('keyup', e =>
            {
                if (e.key == 'Enter')
                {
                    this.display.value = this.calculate();
                }
            })
        },

        btnToDisp(value)
        {
            this.display.value += value;
            this.display.focus();

        },

        resetDisplay()
        {
            this.display.value = '';
        },

        calculate()
        {
            try
            {
                if (eval(this.display.value) == undefined) return 'E: not a expression'
                return eval(this.display.value);
            } catch (error)
            {
                return 'E: not a expression'
            }

        }
    }
}

const Calculator = createCalculator();
Calculator.start();
