//Escreva uma rotina em JavaScript que receba um número digitado pelo usuário e depois exiba a tabuada com as 04 operações básicas da matemática. 
//Escreva uma rotina em JavaScript que receba duas notas do usuário e informe se ele foi aprovado,precisa fazer avaliação ou se está reprovado. 
//Escreva uma rotina que receba dados digitados pelo usuário e os exiba em tela a medida que são digitados. 
//Escreva uma rotina que receba vários dados digitados pelo usuário, armazeno-os e, após clicar emum botão de exibir, seja exibida a lista com dados digitados.
document.getElementById("calculartabuada").addEventListener("click", function() {
    const numero = parseFloat(document.getElementById("numero").value);
    const resultadotabuada = document.getElementById("resultadotabuada");
    
    if (isNaN(numero)) {
        resultadotabuada.textContent = "Número inválido. Certifique-se de digitar um número válido.";
    } else {
        let resultado1 = `<h3>Tabuada do ${numero}:</h3>`;
        
        for (let i = 1; i <= 10; i++) {
            resultado1 += `<p>${numero} + ${i} = ${numero + i}</p>`;
            resultado1 += `<p>${numero} - ${i} = ${numero - i}</p>`;
            resultado1 += `<p>${numero} * ${i} = ${numero * i}</p>`;
            
            if (i !== 0) {
                resultado1 += `<p>${numero} / ${i} = ${numero / i}</p>`;
            }
            
            resultado1 += "<hr>";
        }
        
        resultadotabuada.innerHTML = resultado1;
    }
})

document.getElementById("calcularnota").addEventListener("click", function() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const resultadonota = document.getElementById("resultadonota");
    
    const media = (nota1 + nota2);
    let resultao2 = `<h3>Média: ${media.toFixed(2)}</h3>`;
    
    if (media >= 6.0) {
        resultao2 += '<div class="alert alert-success" role="alert">Aprovado!</div>';
    } else {
        resultao2 += '<div class="alert alert-danger" role="alert">Reprovado.</div>';
    }
    
    resultadonota.innerHTML = resultao2;
});

document.getElementById("dados").addEventListener("input", function() {
    const escrever = document.getElementById("dados").value;
    const dadosescritos = document.getElementById("dadosescritos");
    
    dadosescritos.innerHTML = `<p>Você escreveu: ${escrever}</p>`;
});


const dadosArmazenados = [];

document.getElementById("salvar").addEventListener("click", function() {
    const dados = document.getElementById("dados").value;
    dadosArmazenados.push(dados);
    document.getElementById("dados").value = ""; 

    updateDataList();
});

function updateDataList() {
    const dadosExibidos = document.getElementById("dadosExibidos");
    dadosExibidos.innerHTML = ""; 

    for (const dado of dadosArmazenados) {
        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.textContent = dado;
        dadosExibidos.appendChild(listItem);
    }
}