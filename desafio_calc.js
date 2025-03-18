function calculateRankedLevel(vitorias, derrotas) {
    // Variável para guardar o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
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
        nivel = "Não classificado";
    }

    // Retorna um objeto com o saldo e o nível
    return { saldo: saldoVitorias, nivel: nivel };
}

// Exemplo de uso da função
let quantidadeVitorias = 100;
let quantidadeDerrotas = 0;

// Chama a função e guarda o resultado na variável resultado
let resultado = calculateRankedLevel(quantidadeVitorias, quantidadeDerrotas);

// Exibe a mensagem final usando os valores da variável resultado    
console.log(`O Herói tem um saldo de ${resultado.saldo} e está no nível ${resultado.nivel}`);