import { createElement } from "../functions/dom.js";

export class LanguageItem {
  #element;
  constructor({ lang, level }) {
    const divLanguage = createElement("div", { class: "language-item" });
    const divLang = createElement("p", { class: "language" });
    const divLevel = createElement("p", { class: "level" });
    divLang.innerHTML = `${lang}`;
    divLevel.innerHTML = `${level}`;
    divLanguage.append(divLang);
    divLanguage.append(divLevel);
    this.#element = divLanguage;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
