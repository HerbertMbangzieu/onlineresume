import { createElement } from "../functions/dom.js";
import { ContactItem } from "./ContactItem.js";

export class Contact {
  #element;
  constructor(contact) {
    const divContact = createElement("div", { id: "contact" });
    for (const [key,item ]of Object.entries(contact)) {
        console.log(item);
      const contactItem = new ContactItem(item);
      contactItem.appendTo(divContact);
    }
    this.#element = divContact;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
