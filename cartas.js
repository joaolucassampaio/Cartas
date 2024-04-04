//Escreva um programa em javascript para simular um baralho de cartas. 
//O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”,
//“Puxar uma carta” e “Sair”. 
//Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. 
//Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
//O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

alert("Pilha de Cartas!")

const array = ["Ás de Paus", "Dama de Copas", "Rei de Ouros", "Valete de Espadas", "Dois de Copas", "Quatro de Paus", "Seis de Ouros", "Oito de Espadas", "Três de Copas", "Cinco de Paus", "Sete de Ouros", "Nove de Espadas", "Ás de Espadas", "Dez de Copas", "Rei de Paus", "Nove de Ouros", "Valete de Copas", "Três de Espadas", "Seis de Espadas", "Dois de Espadas"]

let choice = ""
let newCard = ""
let removedCard = ""

do {
    choice = prompt(
        "O baralho possui " + array.length + " cartas." +
        "\n1. Adicionar uma carta;" +
        "\n2. Puxar uma carta;" +
        "\n3. Sair."
    )

    switch (choice) {
        case "1":
            newCard = array.push(prompt("Qual carta você gostaria de adicionar?"))
            break

        case "2":
            removedCard = array.pop()
            alert("A carta retirada foi " + removedCard + ".")
            break

        case "3":
            alert("Encerrando o programa...")
            break

        default:
            alert("Opção inválida!")
            break
    }

} while(choice !== "3")

alert("O programa foi encerrado...")
