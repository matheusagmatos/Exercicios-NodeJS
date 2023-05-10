//exporta apenas esta única function
export function soma (n1,n2,n3,n4) {
    console.log('A funciotn soma sendo executada...')

    soma = parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4);

    console.log('O resultado da soma é: ' + soma);
}

function subtrair () {}

function media () {}

//exprota todas as functions que você definir
// export {soma,subtrair,media}