//para Mostrar os itens na lista
document.getElementById("icone").addEventListener("click", function() {
    let lista = document.getElementById("arealista");
    lista.style.display = (lista.style.display === "block") ? "none" : "block";
});

    //para adicionar o id aos elementos
let qtd=0  
let itens = document.querySelectorAll(".menu-itens li");


let soma=1
itens.forEach(i => {
   
    
    console.log(i.innerText + " posicao "+ qtd);
    
    
    qtd++
     // Exibe o texto de cada item da lista

});

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
    if((valor!=="") && (valor!==null) && (valor!==undefined))
    {
        // isto foi transformado nisto
       /* let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#";
        a.textContent = valor;

        // Adiciona o link ao <li>
        li.appendChild(a);*/
         let newvalor =`<li><a  href="#">${valor}</a></li>`
         newli.innerHTML += newvalor
         
    console.log("O total é:", soma += qtd);
    soma = soma;
       
    }
} 
 
 //Isto nao seria necessario 
 /* li.appendChild(a);

        // Adiciona o <li> na lista principal
        newli.appendChild(li);

        // Adiciona evento de clique ao novo item
        li.addEventListener("click", function () {
            console.log("Item clicado:", this.textContent);
        });

        // Limpa o input
        input.value = "";
    }
}*/  
//Mandar os itens clicados na área da adicao.
function moveritens(){
    itens = document.querySelectorAll(".menu-itens li")

    itens.forEach(i => {
   
    
        i.addEventListener("click", function() {
            console.log(this.textContent);
        
        })
         // Exibe o texto de cada item da lista
    
    });
    

}