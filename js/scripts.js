function openNav() {
    var x = document.getElementById("navigation");

    if(x.className === "navigation") {
        x.className += " menujs"; //mudando no nome da classe
        document.getElementById("threeline-icon").innerHTML = "&Cross;" // altera qualquer coisa quer for html dentro desse id

    } else {
        x.className = " navigation"; //removendo a classe para voltar a visualização para mobile
        document.getElementById("threeline-icon").innerHTML = "&#9776;" // altera qualquer coisa quer for html dentro desse id"

    }



}