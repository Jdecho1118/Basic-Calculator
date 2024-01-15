var input_val=document.getElementById('inpValue');
var subInput_val = document.getElementById('2input');
var histext = document.getElementById('histext');

function getVal(val)
{
    if(input_val.value === '0')
    { 
        input_val.value = val;
    }
    else
    {
        input_val.value += val;
    }
}

function clearAll()
{
    input_val.value = "0";
    subInput_val.value = "";
}

function removeLastDigit()
{
    if(input_val.value.length > 1)
    {
        input_val.value = input_val.value.slice(0, -1);
    }
    else
    {
        input_val.value = input_val.value.slice(0, -1);
        input_val.value = "0";
    }
}

function solve()
{
    var equ = input_val.value;
    subInput_val.value = equ + " =";
    var ans = eval(equ);
    input_val.value = ans;
    showHistory();
}

function showHistory()
{
    var equ = subInput_val.value;
    var ans = input_val.value;
    histext.innerHTML += `<div class="his">
                            <p><b>${equ}</b></p>
                            <p><b>${ans}</b></p>
                        </div>`;
}

var flag = true;
function toggleHistory()
{
    if(flag)
    {   
        histext.style.visibility = "visible";
    }
    else{
        histext.style.visibility = "hidden"; m
    }
    flag = !flag; 
}


function clearHistory()
{
    var choice = confirm("Are you sure to delete history ?");
    if(choice)
        document.getElementById('histext').innerHTML="";
}