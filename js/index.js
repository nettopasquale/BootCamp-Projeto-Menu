const patrosPrincipais = [
    {id:1, name: "Bife com batata", price: 30.00},
    {id:2, name: "Coxa de Frango Crocante", price: 25.00},
    {id:3, name: "Carne de Panela", price: 22.00},
]

const acompanhamentos = [
    {id:1, name: "Farofa", price: 10.00},
    {id:2, name: "Salada", price: 8.00},
    {id:3, name: "Torresmo", price: 12.00},
]


let telefone = $("#telefone").mask("(99) 99999-9999");

const btn = $(".btn")

btn.on("click", function calc(){
    let nome = document.getElementById("nome").value;
    
    let quantitesPratos = document.getElementsByName("quantity_prato");

    let quantitesAcom = document.getElementsByName("quantity_acom");
    
    let output = document.getElementById("output-pedido");
    output.innerHTML = "";

    let totalPratos = 0;
    let totalAcom = 0;
    let totalFinal = 0;

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: "BRL",
    })

    nome.classList.add("nome-pedido")

    output.innerHTML = `
    Caro ${nome}
    <span>Seguem os dados do seu pedido.</span>

    <span>O seu pedido é: </span>

    `
    for (let input of quantitesPratos) {
        let id = input.id

        if (input.value != 0) {
            
            output.innerHTML += `
                <li>
                    <ul>
                    Preto: ${patrosPrincipais[id - 1].name} -  Preço unitário: R$${patrosPrincipais[id - 1].price} - Quantidade: ${parseFloat(input.value)} - Total: R$${patrosPrincipais[id - 1].price * parseFloat(input.value)}
                    </ul>
                    </li>
             `
            totalPratos += patrosPrincipais[id - 1].price * parseFloat(input.value);  
            
        }
    }
    for (let input of quantitesAcom) {
        let id = input.id

        if (input.value != 0) {
            
            output.innerHTML += `
                <li>
                    <ul>
                        Acompanhamento: ${acompanhamentos[id - 1].name} -  Preço unitário: R$${acompanhamentos[id - 1].price} - Quantidade: ${parseFloat(input.value)} - Total: R$${acompanhamentos[id - 1].price * parseFloat(input.value)}
                        </ul>
                    </li>
             `
             totalAcom += acompanhamentos[id -1].price * parseFloat(input.value);
        }
    }
    
    totalFinal = totalPratos + totalAcom;
    output.innerHTML += `<b>Preço Final: ${formatter.format(totalFinal)}</b>`

});




