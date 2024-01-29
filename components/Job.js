import { createElement } from "../functions/dom.js";
import { JobItem } from "./JobItem.js";

export class Job {
  #element;

  constructor(jobs) {
    const title = createElement('h3', {class: 'title'})
    title.innerHTML='Work Experience <div></div>'
    const divJob = createElement("div", { id: "job" });
    divJob.append(title)
    for (const job of jobs) {
      const jobItem = new JobItem(job);
      jobItem.appendTo(divJob)
    }
    this.#element = divJob;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
