import { Octokit } from "https://esm.sh/octokit";

class GithubUsers {
  constructor() {
    this.#octokit = new Octokit({
      auth: "YOUR_KEY",
    });
  }
  #octokit;
  user;
  users;
  getAuthenticated = async () => {
    const { data } = await this.#octokit.rest.users.getAuthenticated();
    this.user = data;
  };

  getUsers = async () => {
    const { data } = await this.#octokit.request(`GET /users`);
    this.users = data;
  };

  createCard = () => {
    const card = document.createElement("div");
    const avatar = document.createElement("img");
    const textContainer = document.createElement("div");
    const nick = document.createElement("p");
    const name = document.createElement("p");

    card.classList.add("card");
    avatar.src = this.user.avatar_url;
    avatar.classList.add("img");
    nick.innerText = this.user.login;
    name.innerText = this.user.name;
    textContainer.append(name, nick);
    card.append(avatar, textContainer);
    document.body.append(card);
  };
}

const githubUsers = new GithubUsers();
githubUsers.getAuthenticated().then(() => {
  githubUsers.createCard();
});
