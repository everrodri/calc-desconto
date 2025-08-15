function calcDesconto(){
    //Entrada de dados
    let valorOriginal = document.getElementById("campo_preco").value;
    let desconto = document.getElementById("campo_desconto").value;

    //Processamento
    let valorDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valorDesconto;

    //Saida
    document.getElementById("resultado").textContent ="Valor final:" + valorFinal
}
