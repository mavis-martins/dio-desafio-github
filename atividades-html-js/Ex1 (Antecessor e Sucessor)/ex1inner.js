function num(){
    var antesuc = document.getElementById('antesuc')
    var x = parseInt(document.getElementById('numero').value);
    if(x == ""){
        alert("Digite um número!");
        return false;
    } else {
        y = x + 1;
        z = x - 1;

        antesuc.innerText = "O antecessor é "  + z + " e o sucessor é " + y;
        }

}

var el = document.getElementById('gerar');
el.addEventListener('click', num)