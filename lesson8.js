function f()
{
    let n1=document.getElementById("n1").value 
    let n2=document.getElementById("n2").value 
    switch (event.target.value) {
        case '+':
            alert(+n1+(+n2))
            break;
        case '*':
           alert(n1*n2)
           break;
        case '^':
           alert(n1**n2)
           break;
        case 'bin':
           alert((parseInt(n1,2)+parseInt(n2,2)).toString(2)) 
           break;
        default:
            break;
    }
}
function f1()
{
    let name=document.getElementById("name").value || "guest"
    let pass=document.getElementById("pass").value || "1234"
    alert("hello to " + name + " your pass is " + pass)
}