var pesquisa = document.querySelector("#filtrar")
var pacientes = document.querySelectorAll(".paciente")

pesquisa.addEventListener("input", function(){
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        var nome = paciente.querySelector(".info-nome").textContent
        console.log(nome)
        console.log(this.value)
        
        

        if(this.value.length > 0){
            paciente.classList.add(".invisivel")
        }

    }
    
    pacientes.forEach(paciente => {
        

       

        if(nome != this.value){
            paciente.classList.add(".invisivel")
            console.log("fadeouting")
            
        }
    });



})

