function validateForm(){
    var x = parseInt(document.forms["myForm"]["fname"].value)
    if (x == "") {
        alert("Digite um número");
        return false;
    } else {
        y = x + 1;
        z = x - 1;
        alert("O antecessor é " + z + " e o sucessor é " + y)
    }
}