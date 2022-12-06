function validateForm(){
    var x = parseInt(document.forms["myForm"]["fname"].value);
    var y = parseInt(document.forms["myForm"]["fname2"].value);
    var z = parseInt(document.forms["myForm"]["fname3"].value);

    if(x == ""){
        alert("Digite um número!");
            return false;
    } else if(y == ""){
        alert("Digite um número!");
            return false;  
    } else if(z == "") {
        alert("Digite um número!");
            return false;
    } else {
        var media = parseFloat((x+y+z)/3);
            alert("A média é: " + media);
    }
}
