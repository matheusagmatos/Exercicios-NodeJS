//importando uma function
import * as readline from 'node:readline/promises';
import {soma} from './calculo.js';

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question("Digite o primeiro valor:",(num1) => {
    entrada.question("Dgitie o segundo valor", (num2) => {
        entrada.question("Digite o terceiro valor", (num3) => {
            entrada.question("Digite o quarto valor", (num4) => {
                console.log("valor 1: " + num1);
                console.log("valor 2: " + num2);
                console.log("valor 3: " + num3);
                console.log("valor 4: " + num4);

                soma(num1,num2,num3,num4);
            });
        });
    });
});

