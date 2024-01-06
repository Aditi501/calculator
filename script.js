// Display value 
function display(val){
    document.getElementById('display-screen').value += val
    return val
}

// Clear the display 
function clr() { 
    document.getElementById("display-screen").value = "" 
} 

//Delete last element
function del()
{
var exp = document.getElementById("display-screen").value ;
document.getElementById("display-screen").value = exp.substring(0, exp.length - 1); /* remove the element from total length ? 1 */
}

 // Return result 
 function solve()
 {
 var exp = document.getElementById("display-screen").value ;
 if(exp)
 {
    document.getElementById("display-screen").value = eval(exp)
 }
 }