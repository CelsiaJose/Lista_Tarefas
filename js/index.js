//para Mostrar os itens na lista
document.getElementById("icone").addEventListener("click", function() {
    let lista = document.getElementById("arealista");
    lista.style.display = (lista.style.display === "block") ? "none" : "block";
});

let qtd = 0;
let itens_adicionandos=document.getElementById("itens_adicionandos")

function adicionarEventosAosItens() {
    let itens = document.querySelectorAll("#newli li");//serquilha devido a estar já aí

    itens.forEach(i => {
        i.addEventListener("click", function () {
            qtd++;            
            
            if(qtd<20){
             
                 const itens=document.createElement("div")
                 itens.className = 'flex-linha itens';
                 itens.id = `itens-${qtd}`

                   //1-Texto clicado
                 const div_elemento = document.createElement('div');//Criando o elemento
                 div_elemento.className = 'elemento'//Criando a class 
                 div_elemento.id = `elemento-${qtd}`//Criando o id e a posicao
                 div_elemento.textContent=this.textContent
                

                //2-elemento check blanck

                let div_iconeadd=document.createElement("div")
                div_iconeadd.className = 'div_iconeadd'
                div_iconeadd.id="div_iconeadd"
                div_iconeadd.id="div_iconeadd_" +qtd
                
                let iconeadd=document.createElement("i")
                iconeadd.classList.add("mdi", "mdi-checkbox-blank-outline"); 
                iconeadd.id = "iconeadd";  
                iconeadd.id = "iconeadd_" + qtd //No html fica class iconeadd_1
                div_iconeadd.appendChild(iconeadd)

                iconeadd.onclick=function(){
                    marcarTarefa(this.id)
                }

                //3-apagar
                let div_iconerem=document.createElement("div");
                div_iconerem.className="div_iconerem"
                div_iconerem.id="div_iconerem"

                let iconerem=document.createElement("i");
                iconerem.classList.add("mdi","mdi-delete"); 
                iconerem.id = "iconerem"          // outra forma que ja junta os dois  iconeRem.id = `iconerem-${contador}`
                iconerem.id = "iconerem_" + qtd

                div_iconerem.appendChild(iconerem)


                iconerem.onclick=function(){
                    
                    deletar(itens.id)
                    
                }
                // Adiciona os elementos ao novo container
                itens.appendChild(div_elemento);
                itens.appendChild(div_iconeadd);
                itens.appendChild(div_iconerem);
                // Adiciona os elementos ao novo container
                itens_adicionandos.appendChild(itens);

            }
            else{
                console.log("voce atingiu o numero de tarefas diárias"+ qtd)
            }   
           
        });
    });
}

//Fexado

//mostrar imput para inserir mais valores

document.getElementById("btnAdicionar").addEventListener("click", function() {
    let addmais = document.getElementById("addmais");
    addmais.style.display = (addmais.style.display === "block") ? "none" : "block";
});
    



// Para salvar os itens e adiciona-los na lista dos itens.
let newli=document.getElementById("newli")// area do main 
let input=document.getElementById("newitem")

function salvaritem()
{
    let valor=input.value.trim() //remove estapacos estras
    // isto pode ser isto
    //   if (valor !== "") {
    //evitar espaços vazios // versao 1 e 2
    if((valor!=="") && (valor!==null) && (valor!==undefined))
    {
        
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#"; 
        a.textContent = valor; 
        li.appendChild(a); 
        newli.appendChild(li) 
        adicionarEventosAosItens()  // Chama a função para garantir que TODOS os itens tenham o evento de clique   
        input.value = "";  
    }
} 
adicionarEventosAosItens() //adiciona os eventos
 

//este icone vai aparecer mas apenas quando o evento listem acontece boas
function marcarTarefa(id){//funcao a ser chamada no icone quadrado  Ela marca por id e elimina pelo qtd ou seja  a tarefa selecionada
    let item = document.getElementById(id); // Busca o ícone pelo ID único

    // Alterna entre checkbox marcado e desmarcado
    if (item.classList.contains("mdi-checkbox-blank-outline")) {
        item.classList.remove("mdi-checkbox-blank-outline");
        item.classList.add("mdi-checkbox-marked-outline");
    } else {
        item.classList.remove("mdi-checkbox-marked-outline");
        item.classList.add("mdi-checkbox-blank-outline");
    }
}
function deletar(id) {
    let tarefa = document.getElementById(id); // Ícone clicado
    tarefa.remove() // Encontra a div mais próxima com a classe .tarefa

}

