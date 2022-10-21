import { loadImage } from "./api";
import { createCard } from "./cardCreation";
import { useIndexedDb } from "./indexedDb";

const id = window.location.pathname.split("/")[2];
const container = document.querySelector(".container");
const price = 3000;

loadImage(id).then(image => {
  console.log(image);
  const card = createCard(image);
  const frm = document.createElement("form");
  // const inpt = document.createElement("input");
  const btn = document.createElement("button");

  frm.setAttribute("id", "formId");
  frm.setAttribute("action", "/create-checkout-session");
  frm.setAttribute("method", "POST");

  // inpt.setAttribute("type", "hidden");
  // inpt.setAttribute("name", "price");
  // inpt.setAttribute("value", price);

  btn.setAttribute("class", "btn btn-primary");
  btn.setAttribute("type", "submit");
  btn.textContent = "Purchase";
  // btn.onclick = document.getElementById("formId").submit();

  // frm.appendChild(inpt);
  frm.appendChild(btn);
  container.appendChild(card);
  container.appendChild(frm);
});
