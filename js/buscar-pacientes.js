var botaoImportar = document.querySelector('#importar-paciente')
//console.log(botaoImportar)


botaoImportar.addEventListener("click", function(event){
    event.preventDefault()
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") //equivale a abrir uma nova aba no chrome e colar o endereco 
    xhr.send() // equivale a dar enter no navegador depois do passo acima - Após o send é carregado o evento LOAD, e por isso chama a funcao aqui em baixo
    
    xhr.addEventListener("load", function(){ // função "LOAD" - escuta para pegar o que "carregar" no retorno do site
    var erroAjax = document.querySelector("#erro-ajax")
        if (xhr.status == 200) {
        erroAjax.classList.add("invisivel")
            // console.log(xhr.responseText) //texto de retorno
        var resposta = xhr.responseText // texto de retorno
        var pacientes = JSON.parse(resposta)// converte o elemento response acima para array
        console.log(pacientes)
        pacientes.forEach(adicionarPaciente)      
        //pacientes.forEach(paciente => adicionarPaciente(paciente))  também funcionaria esse foreach
        }
        else{
            
            erroAjax.classList.remove("invisivel")
        }

    }) 


})