class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById("repo-form");
    this.listEl = document.getElementById("repo-list");

    this.registerHandlers();
  }

  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: "rocketseat.com.br",
      description: "Tire a sua ideia do papel.",
      avatar_url: "https://avatars0.githubusercontent.com/u/28929274?=4",
      html_url: "http://github.com/Rocketseat/unform"
    });

    this.render();
  }
  render() {
    this.listEl.innerHTML = "";

    this.repositories.forEach(repo => {
      let imgEl = document.createElement("img");
      imgEl.setAttribute("src", repo.avatar_url);

      let titleEl = document.createElement("strong");
      titleEl.appendChild(document.createTextNode(repo.name));

      let descriptionEl = document.createElement("p");
      descriptionEl.appendChild(document.createTextNode(repo.description));

      let linkEl = document.createElement("a");
      linkEl.setAttribute("target", "_blank");
      linkEl.appendChild(document.createTextNode("Acessar"));

      let listItemEl = document.createElement("li");
      listItemEl.appendChild(document.createTextNode(imgEl));
      listItemEl.appendChild(document.createTextNode(titleEl));
      listItemEl.appendChild(document.createTextNode(descriptionEl));
      listItemEl.appendChild(document.createTextNode(linkEl));

      this.listEl.appendChild(listItemEl);
    });
  }
}

new App();
