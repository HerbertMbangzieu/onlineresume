import { createElement } from "../functions/dom.js";
import { LanguageItem } from "./LanguageItem.js";

export class Language {
  #element;
  constructor(languages) {
    const divLanguage = createElement("div", { id: "language" });
    const divSubLanguage = createElement("div", { id: "sub-language" });
    const title = createElement("h3", { class: "title" });
    title.innerHTML = "Languages <div></div>";
    divLanguage.append(title);
    for (const language of languages) {
      const languageItem = new LanguageItem(language);
      languageItem.appendTo(divSubLanguage);
    }
    divLanguage.append(divSubLanguage)
    this.#element = divLanguage;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
