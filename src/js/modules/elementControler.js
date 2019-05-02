export default class elementControler {
  constructor(languageItems, createdItems, languageTypeItem, ) {
    this.languageItems = languageItems
    this.createdItems = createdItems
    this.languageTypeItem = languageTypeItem
  }
  createElements() {
    for (let index = 0; index < this.languageItems.length; index++) {
      const createdDiv = document.createElement('div')
      const createdParagraph = document.createElement('p')
      createdDiv.className = "box " + this.languageTypeItem
      createdParagraph.className = "boxText"
      createdParagraph.innerHTML = this.languageItems[index]
      createdDiv.appendChild(createdParagraph)
      this.createdItems.push(createdDiv)
    }
  }
  appendElements() {
    this.createdItems.slice().forEach(element => {
      wrapper.appendChild(element)
    })
  }
}
