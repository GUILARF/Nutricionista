var pesquisa = document.querySelector("#filtrar")
var pacientes = document.querySelectorAll(".paciente")

pesquisa.addEventListener("input", function(){
    for (let i = 0; i < pacientes.length; i++) {
        const paciente = pacientes[i];
        var nome = paciente.querySelector(".info-nome").textContent
        console.log(nome)
        console.log(this.value)
        var regexp = new RegExp(this.value, "i") //i = case insensitive

        if(this.value.length > 0){
            paciente.classList.add("invisivel")
            console.log("entrou aqui " + this.value)

            if(regexp.test(nome)){
                paciente.classList.remove("invisivel")
            }
            else{
                paciente.classList.add("invisivel")
            }


        }
        else{
            paciente.classList.remove("invisivel")
            console.log("entrou aqui2 " + this.value)
            console.log(paciente)
        } 
            

    }
    
    // pacientes.forEach(paciente => {
        

       

    //     if(nome != this.value){
    //         paciente.classList.add("invisivel")
    //         console.log("fadeouting")
            
    //     }
    // });



})

