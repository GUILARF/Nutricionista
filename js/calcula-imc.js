function ValidaImc(pacientes) {
    

    for (i = 0; i < pacientes.length; i++) {
        var paciente = pacientes[i]
        var objpeso = paciente.querySelector(".info-peso")
        var peso = objpeso.textContent
        var objaltura = paciente.querySelector(".info-altura")
        var altura = objaltura.textContent  

        var imc = calculaImc(peso, altura)
        var objimc = paciente.querySelector('.info-imc')

        // Msg Erro
        var alturaok = true
        var pesook = true

        if (peso <= 0 || peso >= 400) {
            objimc.textContent = 'Peso Inválido!'
            pesook = false
            paciente.classList.add("campo-invalido")
        }

        if (altura <= 0 || altura >= 3.0) {
            objimc.textContent = 'Altura Inválida!'
            alturaok = false
            paciente.classList.add("campo-invalido")
        }

        //Exibe imc para peso e altura válidos
        if (alturaok && pesook) {
            objimc.textContent = imc
        }
    }
}