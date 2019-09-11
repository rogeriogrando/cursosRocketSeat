class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    this.usuario = "Rogério";
  }
  mostraUsuario() {
    console.log(this.usuario);
  }
}

var MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
  MinhaLista.add("Novo todo");
};

MinhaLista.mostraUsuario();
