//1. Crie uma funcão que recebe como parâmetro um conjunto de elementos e imprima eles em ordem crescente.
function ordenaNumeros(array) {
    return array.sort()
}
const numeros = ["banana", "abacaxi", "uva", "pera"]
console.log(ordenaNumeros(numeros))


//2. Crie uma função que recebe como parâmetro um conjunto de elementos e um elemento específico, a função deve retornar a posição da primeira ocorrência do elemento no array. Caso não exista deve retornar -1.
function comparaElemento(array, elemento) {
    let posicao = -1
    for (let i = 0; i < array.length; i++) {
        if (array[i] == elemento) {
            posicao = i
            i = array.length
        }
    }
    if (posicao >= 0) {
        return posicao
    } else {
        return -1
    }
}
const array = [1, 2, 3, 4, 5]
const numero = 4
console.log("posição: " + comparaElemento(array, numero))


//3. Crie uma função que recebe dois arrays como parâmetro e retorne um array com os elementos de ambos arrays.
function compareArray(array1, array2) {
    const array3 = []
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                array3.push(array1[i])
                break
            }
        }
    }
    return array3
}
const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]
console.log(compareArray(array1, array2))


//4. Implemente a funcionalidade do método reverse.
function reverteArray(array) {
    return array.reverse()
}
const array0 = [1, 2, 3, 4, 5]
console.log(reverteArray(array0))


//5. Implemente a funcionalidade do método keys. Ou seja, crie uma função que recebe como parâmetro um objeto e retorna um array com as proprieades do objeto.
function mostrarPropriedades(obj) {
    return Object.keys(obj)
}
const pessoa = {
    nome: "Matheus",
    idade: 21,
    profissão: "UX UI dev"
}
console.log(mostrarPropriedades(pessoa))


//6. Crie uma função que recebe um array e retorne um array com os números pares. Valide se cada elemento corresponde a um número.
function compararPares(array) {
    const array2 = []
    for (let i = 0; i < array.length; i++) {
        if (!isNaN(array[i])) {
            if (array[i] % 2 == 0) {
                array2.push(array[i])
            }
        }
    }
    return array2
}
const array4 = [1, 2, 3, 4, "teste"]
console.log(compararPares(array4))


//7. Crie uma função que recebe um array e um caracter delimitador. A função deve juntar todos elementos do array em uma string e separar os elementos pelo delimitador.
function juntarElementos(array, delimitador) {
    let string = ""
    for (let i = 0; i < array.length; i++) {
        if (i < array.length - 1) {
            string += array[i] + delimitador
        } else {
            string += array[i]
        }
    }
    return string
}
const array5 = [1, 2, 3, 4, 5]
console.log(juntarElementos(array5, ","))


//8. Crie uma funcão que recebe um array de objetos que possuem o modelo abaixo. A função deve calcular a média de notas geral, a maior média e a menor média, estes dados devem ser retornados em um objeto.
//{
//nome: "fulano",
//notas: [4,5,2,8]
//}
function calcularMedias(pessoas) {
    let mediaMaior = 0
    let mediaMenor = 0
    let media = 0
    let soma = 0
    for (const obj of pessoas) {
        let somaPessoa = 0
        let mediaPessoa = 0
        for (const nota of obj.notas) {
            somaPessoa += nota
        }
        mediaPessoa = somaPessoa / obj.notas.length
        soma += mediaPessoa
        if (mediaPessoa > mediaMaior) {
            mediaMaior = mediaPessoa
        }
        if (obj == pessoas[0]) {
            mediaMenor = mediaPessoa
        } else {
            if (mediaPessoa < mediaMenor) {
                mediaMenor = mediaPessoa
            }
        }
    }
    media = soma / pessoas.length

    const resultado = {
        mediaGeral: media,
        mediaMaior: mediaMaior,
        mediaMenor: mediaMenor
    }
    return resultado
}
const pessoas = [
    {
        nome: "Matheus",
        notas: [3, 5, 2, 8]
    },
    {
        nome: "Yurik",
        notas: [2, 7, 1, 6]
    },
    {
        nome: "Luiz",
        notas: [4, 6, 7, 6]
    }
]
console.log(calcularMedias(pessoas))


//9. Crie uma função que recebe um conjunto de elementos e um número como parâmetros. A função deve retornar um novo conjunto com vários conjuntos menores de elementos contendo cada um a quantidade de elementos igual ao valor passado como parametro.
//elementos = [1,2,3,4,5,6,7,8]
//calcular(elementos, 2)
//[[1,2], [3,4], [5,6], [7,8]]
function compactarConjunto(array, numero) {
    let i = 0
    let j = number
    const array3 = []
    while (i < array.length) {
        const array2 = []
        for (i; i < numero; i++) {
            array2.push(array[i])
        }
        number += j
        array3.push(array2)
    }
    return array3
}
const array6 = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(compactarConjunto(array6, 2))


//10. Crie uma função que recebe um conjunto de objetos e uma string que será o nome de uma propriedade. A função deve retornar um conjunto de objetos apenas com aqueles que possuem a propriedade passada como parametro definida.
function compararPropriedade(array, string) {
    const array2 = []
    for (const obj of array) {
        for (propriedade in obj) {
            if (propriedade == string) {
                array2.push(obj)
            }
        }
    }
    return array2
}
const notebooks = [
    {
        nome: "nitro 5",
        peso: 2
    },
    {
        nome: "dell g15",
        peso: 1
    },
    {
        nome: "samsumg book"
    }
]
console.log(compararPropriedade(notebooks, "peso"))