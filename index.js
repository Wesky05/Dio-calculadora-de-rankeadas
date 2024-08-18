let resultado = calculo(200,6) 
let nivel = ""


function calculo (vitorias, derrotas){
    let elo = vitorias - derrotas
    return elo

}


if (resultado < 10) {
    nivel = "Ferro";
} else if (resultado >= 11 && resultado < 21) {
    nivel = "Bronze";
} else if (resultado >= 21 && resultado < 51) {
    nivel = "Prata";
} else if (resultado >= 51 && resultado < 81) {
    nivel = "Ouro";
} else if (resultado >= 81 && resultado < 91) {
    nivel = "Diamante";
} else if (resultado >= 91 && resultado < 100) {
    nivel = "Lendário";
} else if (resultado >= 101) {
    nivel = "Imortal";
}


console.log(" O Héroi tem saldo de " + resultado + " está no nível de " + nivel)