function myEscop() {
  const lista = document.getElementById("lista");
  const tarefa = document.getElementById("task");
  pegarTarefasDoLocalStore();

  //Adiciona um evento que aciona quando a tecla é pressionada
  tarefa.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      lista.appendChild(addTarefa(tarefa.value));
      limpaTarefa();
      saveTasks();
    }
  });

  //Se eu clicar em um evento com click chama essa funcao
  document.addEventListener("click", function (e) {
    const el = e.target;
    //console.log("pegando click")
    //console.log(el.id === 'btn-add-task')
    if (tarefa.value && el.id === "btn-add-task") {
      lista.appendChild(addTarefa(tarefa.value));
      limpaTarefa();
      saveTasks();
    }

    if (el.classList.contains("apagar")) {
      removeTask(el);
      saveTasks();
    }
  });

  function removeTask(elemento) {
    const paiElemento = elemento.parentElement.remove();
    return paiElemento;
  }

  function addTarefa(task) {
    const tarefa = document.createElement("li");
    tarefa.innerText = task + " ";
    tarefa.appendChild(addRemove());
    return tarefa;
  }

  function addRemove() {
    const apagar = document.createElement("button");
    apagar.classList = "apagar";
    apagar.title = "Apagar esta tarefa blablabla";
    apagar.innerHTML = "Apagar";
    return apagar;
  }

  function saveTasks() {
    const nodeList = document.querySelectorAll("li");
    const listTasks = [];

    for (let task of nodeList) {
      let textoTask = task.innerText.replace("Apagar", "");
      listTasks.push(textoTask);
    }

    const tarefasJSON = JSON.stringify(listTasks);
    console.log(tarefasJSON);
    localStorage.setItem("Tarefas", tarefasJSON);
  }

  function pegarTarefasDoLocalStore() {
    const tarefas = localStorage.getItem("Tarefas");
    //Convertendo string para array
    const listTarefas = JSON.parse(tarefas);

    for (let tarefa of listTarefas) {
      lista.appendChild(addTarefa(tarefa));
    }
  }

  function limpaTarefa() {
    tarefa.value = "";
    tarefa.focus();
  }
}

myEscop();
