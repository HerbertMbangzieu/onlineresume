import { createElement } from "../functions/dom.js";

export class ContactItem {
  #element;

  constructor({ text, icon }) {
    let divItem = createElement("div", { class: "contact-item" });
    let textItem = createElement("p", { class: "text-contact-item" });
    textItem.innerHTML = `${text}`;
    let iconItem = createElement("i", { class: `fa-solid fa-${icon}` });
    divItem.append(iconItem);
    divItem.append(textItem);
    this.#element = divItem;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
