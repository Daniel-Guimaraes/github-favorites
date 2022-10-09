import { GithubUser } from "./GithubUser.js";

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root);
    this.load();
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || [];
  }

  save() {
    localStorage.setItem("@github-favorites:", JSON.stringify(this.entries));
  }

  async add(username) {
    try {
      const userExists = this.entries.find(
        (entry) => entry.login.toUpperCase() === username.toUpperCase()
      );

      if (userExists) {
        throw new Error("Usuário já cadastrado");
      }

      const user = await GithubUser.search(username);

      if (user.login === undefined) {
        throw new Error("Usuário não econtrado!");
      }

      this.entries = [user, ...this.entries];

      this.update();

      this.save();
    } catch (error) {
      alert(error.message);
    }
  }

  delete(user) {
    const filteredEntries = this.entries.filter(
      (entry) => entry.login !== user.login
    );

    this.entries = filteredEntries;
    this.update();
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root);

    this.tbody = this.root.querySelector("table tbody");

    this.update();

    this.onAdd();
  }

  onAdd() {
    const addButton = this.root.querySelector(".search button");

    addButton.onclick = () => {
      const { value } = this.root.querySelector(".search input");

      this.add(value);
    };
  }

  update() {
    this.removeAllTr();

    this.entries.forEach((user) => {
      const row = this.createRow();

      row.querySelector(
        ".column-user img"
      ).src = `https://github.com/${user.login}.png`;

      row.querySelector(".column-user img").alt = `Image de ${user.name}`;

      row.querySelector(
        ".column-user a"
      ).href = `https://github.com/${user.login}`;

      row.querySelector(".column-user p").textContent = user.name;

      row.querySelector(".column-user span").textContent = user.login;

      row.querySelector(".column-followers").textContent = user.followers;

      row.querySelector(".column-repositories").textContent = user.public_repos;

      row.querySelector(".button-remove").onclick = () => {
        const isOk = confirm("tem certeza que deseja apagar essa linha ?");

        if (isOk) {
          this.delete(user);
        }
      };

      this.tbody.append(row);
    });
  }

  createRow() {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="column-user">
                    <img
                      src="https://github.com/Daniel-Guimaraes.png"
                      alt="Imagem de daniel"
                    />

                    <a href="https://github.com/Daniel-Guimaraes" target="_blank">
                      <p>Daniel Guimarães</p>
                      <span>danielguimarães</span>
                    </a>
                  </td>

                  <td class="column-repositories">12</td>

                  <td class="column-followers">1000</td>

                  <td>
                    <button class="button-remove">&times;</button>
                  </td>`;
    return tr;
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove();
    });
  }
}
