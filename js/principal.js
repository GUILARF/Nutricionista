var titulo = document.querySelector('.titulo')
var botaoaddicionarPaciente = document.querySelector('#adicionar-paciente')
//Previnindo o comportamento padrão
botaoaddicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault()
    adicionarPaciente()
})


function adicionarPaciente(){
    var form = document.querySelector('#form-adicionar')
    var pacientes = obtemPacienteDoFormulario(form)
    
    //Cria novo registro Tr para o paciente
    var pacinteTr = montaTr(pacientes)
    var tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacinteTr)

    //Valida o form
    var pacientesParaValidar = document.querySelectorAll(".paciente")
    ValidaImc(pacientesParaValidar)
    form.reset()

}

// titulo.addEventListener("click", mostramensagem)
// function mostramensagem(){
//     console.log("Fui clicado")
// }

//Outra forma de fazer o comando acima
titulo.addEventListener("click", function () {
    console.log("Fui clicado")
})

// //Mesmo evento acima previnindo o comportamento padrão
// botaoadd.addEventListener("click", function (event) {
//     event.preventDefault()



function calculaImc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function montaTr(pacientes) {
    var tr = document.createElement("tr")
    tr.classList.add("paciente")
    tr.appendChild(montaTd(pacientes.nome, "info-nome"))
    tr.appendChild(montaTd(pacientes.peso, "info-peso"))
    tr.appendChild(montaTd(pacientes.altura, "info-altura"))
    tr.appendChild(montaTd(pacientes.gordura, "info-gordura"))
    tr.appendChild(montaTd(pacientes.imc, "info-imc"))
    return tr
}

function montaTd(valor, classe) {
    var td = document.createElement("td")
    td.textContent = valor
    td.classList.add(classe)
    return td
}

function obtemPacienteDoFormulario(form) {
    var pacientes = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return pacientes
}
