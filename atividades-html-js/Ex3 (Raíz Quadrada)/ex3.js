function validateForm(){
    var x = parseInt(document.forms["myForm"]["fname"].value);
    if(x == ""){
        alert("Digite um número!");
            return false;
    } else {
        var y = x * x;
            alert("A raíz quadrada é " + y);
    }
}