const remover = document.getElementsByClassName("remover");

for (var i = 0; i < remover.length; i++) {
    remover[i].addEventListener("click", function (event){

    event.target.parentElement.parentElement.parentElement.remove()
    valorTotal()
    
        
    })
}
    

const mudar = document.querySelectorAll("#numero")
for( var i = 0; i< mudar.length; i++){
    mudar[i].addEventListener("change" , valorTotal)

}

        function valorTotal(){

            let total_produtos = 0
            let Total = 0
            
            
            
            const produto = document.querySelectorAll(".produto");
                
                
                for( var i = 0; i< produto.length; i++){
                const valor1 = produto[i].querySelectorAll(".valor1")[0].innerText.replace("R$","").replace("," , ".")
                const numero = produto[i].querySelectorAll("#numero")[0].value
                
                
                    
                 Total += valor1 * numero
                total_produtos += valor1 * numero
                   
                
           }
                
            total_produtos = total_produtos.toFixed(2)
            total_produtos = total_produtos.replace ("." , ".")
            document.querySelector(".valor_produtos").innerText = "R$" + total_produtos
                
            Total = Total.toFixed(2)
            Total = Total.replace ("." , ".")
            document.querySelector(".valor3").innerText = "R$" + Total

           


            
        }
     
    

    










