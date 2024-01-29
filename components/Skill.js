import { createElement } from "../functions/dom.js";
import { SkillItem } from "./SkillItem.js";

export class Skill {
  #element;
  constructor(skills) {
    const divSkill = createElement("div", { id: "contact" });
    const title = createElement("h3", { class: "title" });
    title.innerHTML = "Skills & Competences <div></div>";
    divSkill.append(title);
    for (const skill of skills) {
      const skillItem = new SkillItem(skill);
      skillItem.appendTo(divSkill);
    }
    this.#element = divSkill;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
