import { createElement } from "../functions/dom.js";

export class JobItem {
  #element;

  /**
   *
   * @param {position<string>, company<string>, start<string>, end<string>, description<string>} jobItem
   */
  constructor(jobItem) {
    const divJobItem = createElement("div", { class: "job-item" });
    const divFirstRow = createElement("div", { class: "first-row" });
    const divPosition = createElement("div", { class: "job-position" });
    const divDuration = createElement("div", { class: "job-duration" });
    const divCompany = createElement("div", { class: "job-company" });
    const divDescription = createElement("div", { class: "job-description" });

    divPosition.innerHTML = `${jobItem.position}`;
    divCompany.innerHTML = `${jobItem.company}`;
    divDescription.innerHTML = `${jobItem.description}`;
    divDuration.innerHTML = `${jobItem.start} - ${jobItem.end}`;
    divFirstRow.append(divPosition);
    divFirstRow.append(divDuration);
    divJobItem.append(divFirstRow);
    divJobItem.append(divCompany);
    divJobItem.append(divDescription);

    this.#element = divJobItem;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
