document.addEventListener('DOMContentLoaded', () => {
    function adicionarBotoesFechar() {
        let listaNodos = document.getElementsByTagName("li");
        for (let i = 0; i < listaNodos.length; i++) {
            if (!listaNodos[i].querySelector('.botao-fechar')) {
                let span = document.createElement("span");
                let texto = document.createTextNode("\u00D7");
                span.className = "botao-fechar";
                span.appendChild(texto);
                listaNodos[i].appendChild(span);

                span.onclick = function() {
                    let div = this.parentElement;
                    div.style.display = "none";
                };
            }
        }
    }

    adicionarBotoesFechar();

    let lista = document.querySelector('ul');
    lista.addEventListener('click', function(evento) {
        if (evento.target.tagName === 'LI') {
            evento.target.classList.toggle('marcado');
        }
    }, false);

    window.adicionarElemento = function() {
        let li = document.createElement("li");
        let valorInput = document.getElementById("tarefa").value;
        let t = document.createTextNode(valorInput);
        li.appendChild(t);

        if (valorInput === '') {
            alert("Você precisa descrever a tarefa");
        } else {
            document.getElementById("listaItens").appendChild(li);
        }
        document.getElementById("tarefa").value = "";

        let span = document.createElement("SPAN");
        let texto = document.createTextNode("\u00D7");
        span.className = "botao-fechar";
        span.appendChild(texto);
        li.appendChild(span);

        span.onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        };
    };
});