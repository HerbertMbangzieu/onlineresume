import { createElement } from "../functions/dom.js";

export class EducationItem{
  #element;

  /**
   *
   * @param {degree<string>, year<string>, school<string>, description<string>} educationItem
   */
  constructor(educationItem) {
    const divEducationItem= createElement("div", { class: "job-item" });
    const divFirstRow = createElement("div", { class: "first-row" });
    const divDegree = createElement("div", { class: "job-position" });
    const divYear = createElement("div", { class: "job-duration" });
    const divSchool = createElement("div", { class: "job-company" });
    const divDescription = createElement("div", { class: "description" });

    divDegree.innerHTML = `${educationItem.degree}`;
    divSchool.innerHTML = `${educationItem.school}`;
    divDescription.innerHTML = `${educationItem.description}`;
    divYear.innerHTML = `${educationItem.year}`;
    divFirstRow.append(divDegree);
    divFirstRow.append(divYear);
    divEducationItem.append(divFirstRow);
    divEducationItem.append(divSchool);
    divEducationItem.append(divDescription);

    this.#element = divEducationItem;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
