const campoTarefa = document.getElementById("campo-tarefa");
const botaoTarefa = document.getElementById("botao-tarefa");
let lenLista = 0;

function perorrerString(string){
  let tamanho = string.lenght;
  let espacos = 0;
  for(let i=0; i<tamanho; i++){
    if(string[i] === " "){
      espacos++;
    }
  }
  if(tamanho === espacos){
    return false;
  }
  return true;
}

function criarTarefa(){
  let tarefa = campoTarefa.value;
  
  if(tarefa !== "" && perorrerString(tarefa)){
    const ul = document.getElementById("card-tarefas");

    const li = document.createElement("li");
    li.class = "tarefas-col";
    li.id=""+lenLista;

    const label = document.createElement("label");
    
    const i = document.createElement("i");
    i.classList.add("fa")
    i.classList.add("fa-trash");
    
    const span = document.createElement("span");
    span.innerText = " "+tarefa;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "lista-tarefa";

    label.appendChild(input);
    label.appendChild(span);
    li.appendChild(label);
    li.appendChild(i);

    ul.appendChild(li);
    lenLista++;
  }else{
    alert("Tarefa invalida");
  }

  campoTarefa.value = "";
  removerTarefa();
}

botaoTarefa.addEventListener("click", criarTarefa);


campoTarefa.addEventListener("keypress", function(e){
  if(e.which === 13){
    criarTarefa()
  }
});

function removerTarefa(){
  let isRemove = document.getElementsByTagName("i");
  let ul = document.getElementById("card-tarefas");
  for(let i = 0; i<isRemove.length; i++){
    isRemove[i].addEventListener("click", function(){
      let li = document.getElementById(this.parentNode.id);
      ul.removeChild(li);
    });
  }
}