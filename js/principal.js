var titulo = document.querySelector('.titulo')

var pacientes = document.querySelectorAll('.paciente')

for (i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i]

    //Peso
    var objpeso = paciente.querySelector('.info-peso')
    var vlpeso = objpeso.textContent
    //Altura
    var objaltura = paciente.querySelector('.info-altura')
    var vlaltura = objaltura.textContent
    //Imc
    var imc = vlpeso / (Math.pow(vlaltura, 2))
    var objimc = paciente.querySelector('.info-imc')

    // Msg Erro
    var alturaok = true
    var pesook = true

    if (vlpeso <= 0 || vlpeso >= 400) {
        objimc.textContent = 'Peso Inválido!'
        pesook = false
        paciente.classList.add("campo-invalido")
    }

    if (vlaltura <= 0 || vlaltura >= 3.0) {
        objimc.textContent = 'Altura Inválida!'
        alturaok = false
        paciente.classList.add("campo-invalido")
    }

    //Exibe imc para peso e altura válidos
    if (alturaok && pesook) {
        objimc.textContent =  imc.toFixed(1)
    }

    // titulo.addEventListener("click", mostramensagem)
    // function mostraMensagem(){
    //     console.log("Fui clicado")
    // }

    titulo.addEventListener("click", mostramensagem)
    function mostraMensagem(){
        console.log("Fui clicado")
    }

}