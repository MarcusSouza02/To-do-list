let contador = 0; //Contar a quantidade de tarefas adicionadas
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //Pega o valor digitado
    let valorInput = input.value;

    //Verifica se o input é diferente de vazio
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        //duas crases para colar o código
        let novoItem = `
        <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>   
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
            </div>   
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete">
                    <i class="mdi mdi-delete"></i> Deletar
                </button>
            </div>
        </div>`;


        //Adicionando novo item
        main.innerHTML += novoItem;

        //Zerar o input
        input.value = "";
        input.focus();
    }
}

//Função para deletar tarefas
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == 'item') {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    }
}

//Quando acontecer um evento no 'input', realiza uma função
input.addEventListener('keyup', function (event) {
    //Se teclar enter adiciona uma tarefa
    if (event.keyCode === 13) {
        event.preventDefault(); //Cancelando outras funções do Enter
        btnAdd.click();
    }
})

