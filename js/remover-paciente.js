
var tabela = document.querySelector("table")
tabela.addEventListener("dblclick", function (event) {
    var alvoEvento = event.target
    var paiDoAlvo = alvoEvento.parentNode //TR = pai do evento
    //console.log("quem clicou: " + event.target + "  e o dono é: " + this)
    paiDoAlvo.remove()

    console.log(event) // duplo clique do mouse
    console.log(event.target) // alvo onde foi clicado
    console.log(this) // quem está escutando o clique, no caso a tabela

    //event.target.parentNode.remove() também daria certo
}
)