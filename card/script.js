import Card from "./components/Card/index.js";

if (!customElements.get("new-card")) {
  customElements.define("new-card", Card);
}

fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=9")
  .then(res => res.json())
  .then(data => {
    data.data.forEach(el => {
      console.log(el)
      let card = document.createElement("new-card");
      card.setAttribute("owner", el.owner);
      card.setAttribute("number", el.number);
      card.setAttribute("expire", el.expiration);
      card.setAttribute("type", el.type);
      document.body.append(card);
    })
  })