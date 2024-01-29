import { createElement } from "../functions/dom.js"

export class Identity{
    #element
    /**
     * 
     * @param {firstname<string>, lastname<string>,description<string>} identity 
     */
    constructor(identity){
        const divIdentity = createElement('div', {id: 'identity'})
        const divFname = createElement('div', {id: 'name'})
        const textFname = createElement('p', {class: 'name'})
        textFname.innerHTML = `${identity.firstname} <br> ${identity.lastname}`
        const divDescription = createElement('div', {id: 'description'})
        const textDescription = createElement('p', {class: 'description'})
        textDescription.innerHTML = `${identity.description}`
        divFname.append(textFname)
        divDescription.append(textDescription)
        divIdentity.append(divFname)
        divIdentity.append(divDescription)
        this.#element = divIdentity
    }

    appendTo(pageElement){
        pageElement.append(this.#element)
    }
}