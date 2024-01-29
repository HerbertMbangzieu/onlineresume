import { createElement } from "../functions/dom.js";
import { ToolItem } from "./ToolItem.js";

export class Tool {
  #element;
  constructor(tools) {
    const divTool = createElement("div", { id: "contact", class: "contact" });
    const title = createElement("h3", { class: "title" });
    title.innerHTML = "Tools <div></div>";
    divTool.append(title);
    for (const tool of tools) {
      const toolItem = new ToolItem(tool);
      toolItem.appendTo(divTool);
    }
    this.#element = divTool;
  }

  appendTo(pageElement) {
    pageElement.append(this.#element);
  }
}
