function calculardist(){
    var tempo = parseFloat(document.forms["myForm"]["tempo"].value);
    var velocidade = parseFloat(document.forms["myForm"]["velocidade"].value);
    var consumo = parseFloat(document.forms["myForm"]["consumo"].value);
    var valorcomb = parseFloat(document.forms["myForm"]["valorcomb"].value);

    if(tempo == "") {
        alert("Informe a duração da viagem.");
            return false;
    } else if (velocidade == "") {
        alert("Informe a velcoidade qual percorreu a viagem.");
            return false;
    } else if (consumo == "") {
        alert("Informe quando de combustível foi consumido.");
            return false;
    } else if (valorcomb == "") {
        alert("Informe o valor do combustível.");
            return false;
    } else {
        var distancia = parseFloat(tempo * velocidade);
        var quantCombustivel = parseFloat(distancia/consumo);
        var valorTotal = parseFloat(quantCombustivel * valorcomb);
            alert("A distância percorrida equivale à: " + distancia + "km.\n" + "Quantidade de combustível gasta foi de " + quantCombustivel + ".\n" + "O valor total da viagem foi de R$" +valorTotal+".")
    }
}