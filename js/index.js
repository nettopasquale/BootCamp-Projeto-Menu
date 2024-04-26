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
    let nome = document.getElementById("nome");
    
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

    output.innerHTML = `
    <div>
    Caro ${nome.value}<br>
    Seguem os dados do seu pedido.<br>
    O seu pedido é:<br>
    </div>
    `
    for (let input of quantitesPratos) {
        let id = input.id

        if (input.value != 0) {
            
            output.innerHTML += `
            
                <li>
                    <ul>
                        Preto: ${patrosPrincipais[id - 1].name} -  Preço unitário: ${patrosPrincipais[id - 1].price} - Quantidade: ${parseFloat(input.value)} - Total: ${patrosPrincipais[id - 1].price * parseFloat(input.value)}
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
                        Acompanhamento: ${acompanhamentos[id - 1].name} -  Preço unitário: ${acompanhamentos[id - 1].price} - Quantidade: ${parseFloat(input.value)} - Total: ${acompanhamentos[id - 1].price * parseFloat(input.value)}
                        </ul>
                    </li>
             `
             totalAcom += acompanhamentos[id -1].price * parseFloat(input.value);
        }
    }
    
    totalFinal = totalPratos + totalAcom;
    output.innerHTML += `Preço: ${formatter.format(totalFinal)}</br>`

});




