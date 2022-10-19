import { loadImage } from "./api";
import { createCard } from "./cardCreation";
import { useIndexedDb } from "./indexedDb";

const id = window.location.pathname.split("/")[2];
const container = document.querySelector(".container");

loadImage(id).then(image => {
  const card = createCard(image);
  const btn = document.createElement("button");

  btn.setAttribute("class", "btn btn-primary");
  btn.textContent = "Purchase";
  btn.onclick = useIndexedDb("favorites", "FavoritesStore", "put", image);

  container.appendChild(card);
  container.appendChild(btn);
});
