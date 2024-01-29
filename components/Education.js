import { createElement } from "../functions/dom.js";
import { EducationItem } from "./EducationItem.js";

export class Education {
  #element;

  constructor(educations) {
    const title = createElement('h3', {class: 'title'})
    title.innerHTML='Education <div></div>'
    const divEducation = createElement("div", { id: "job" });
    divEducation.append(title)
    for (const education of educations) {
      const educationItem = new EducationItem(education);
      educationItem.appendTo(divEducation)
    }
    this.#element = divEducation;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
