//para Mostrar os itens na lista
document.getElementById("icone").addEventListener("click", function() {
    let lista = document.getElementById("arealista");
    lista.style.display = (lista.style.display === "block") ? "none" : "block";
});

function adicionarEventosAosItens() {
    //let itens = document.querySelectorAll(".menu-itens li"); como eu fazia
    let itens = document.querySelectorAll("#newli li"); // Seleciona todos os <li> da lista

    itens.forEach(i => {
        i.addEventListener("click", function () {
            console.log("Item clicado:", this.textContent);
        });
    });
}

//mostrar imput para inserir mais valores
function addmais(){

}


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
        // isto foi transformado nisto
       /* let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = valor;

        // Adiciona o link ao <li>
        li.appendChild(a);*/
        //1 alteração
        //Criaremos li e a ao inves desta forma com o innerhtml
         /*let newvalor =`<li><a  href="#">${valor}</a></li>`
         newli.innerHTML += newvalor*/
          // 1.2 alterado Criando um novo <li> e <a> dinamicamente
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#"; //adicionar um atributo a tag a 
        a.textContent = valor; // ${valor} subistitui 
        //Até agora ainda so recriamos falta o newli.innerHTML += newvalor*/
        //O innerhtml recria a lista o que ñ pode ser ligal pois altera todos os eventos antes ja criados
        li.appendChild(a); //adiciona o o a a li ou seja o a dentro do li aconforme as variaveis pois 
        //até agora só tinhamos criado e ñ feito nada 
        //agora vamos adicionalos a novalista
        newli.appendChild(li) //newli.innerHTML += newvalor*/ apenas adiciona um item pois eu ja os acupleios
        //agora adiciono evento de click a lista ao li pois o item ja foi criado
        adicionarEventosAosItens()  // Chama a função para garantir que TODOS os itens tenham o evento de clique
        
        input.value = "";  
    }
} 
adicionarEventosAosItens() //adiciona os eventos
 
//Mandar os itens clicados na área da adicao.
function moveritens(){

}

//Como estudo
/*function moveritens(){
   itens = document.querySelectorAll(".menu-itens li")

    itens.forEach(i => {
   
    
        i.addEventListener("click", function() {
            console.log(this.textContent);
        
        })
         // Exibe o texto de cada item da lista
    
    });
    

}*/