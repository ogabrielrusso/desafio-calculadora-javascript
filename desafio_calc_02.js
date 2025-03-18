function calculateRankedLevel(vitorias, derrotas) {
    // Variável para guardar o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Variável para guardar o nível do jogador
    let nivel;

    // Estruturas de decisão para definir o nível com base nas vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    } else {
        nivel = "Não classificado"; // Caso a lógica não cubra alguma situação
    }

    // Retorna um objeto com o saldo e o nível
    return { saldo: saldoVitorias, nivel: nivel };
}

// Exemplo de uso da função
let quantidadeVitorias = 1; // Quantidade de vitórias do jogador
let quantidadeDerrotas = 100; // Quantidade de derrotas do jogador

// Chama a função e guarda o resultado na variável resultadoDoCalculo
let resultadoDoCalculo = calculateRankedLevel(quantidadeVitorias, quantidadeDerrotas);

// Exibe a mensagem final usando os valores da variável resultadoDoCalculo
console.log(`O Herói tem um saldo de ${resultadoDoCalculo.saldo} e está no nível ${resultadoDoCalculo.nivel}`);