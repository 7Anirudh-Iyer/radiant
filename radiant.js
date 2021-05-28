//This is my attempt at creating a dom library
//I will try to create a function for each html tag

function Element(
    elementName, content, styler, onClick, onMouseOver, onChange, id
    ){
    this.elname = elementName
    this.content = content
    this.styler = styler
    this.clicked = onClick
    this.onMouseOver = onMouseOver
    this.onChange = onChange
    this.id = id
    let h
    if(this.elname == 'image' || this.elname == 'img'){
        h = document.createElement('img')
        h.src = this.content
    }
    else{
        let strname = String(this.elname)
        h = document.createElement(this.elname);
        h.innerHTML = this.content
    }
    //styling
    {
        h.style.color = styler.color
        h.style.backgroundColor = styler.backgroundColor
        h.style.textAlign = styler.textAlign
        h.style.border = styler.border
        h.style.borderColor = styler.borderColor
        h.style.borderWidth = styler.borderWidth
        h.style.margin = styler.margin
        h.style.padding = styler.padding
        h.style.borderRadius = styler.borderRadius
        h.style.marginTop = styler.marginTop
        h.style.marginBottom = styler.marginBottom
        h.style.marginLeft = styler.marginLeft
        h.style.marginRight = styler.marginRight
        h.style.alignSelf = styler.alignSelf
        h.style.alignContent = styler.alignContent
        h.style.alignItems = styler.alignItems
        h.style.background = styler.background
        h.style.backgroundImage = styler.backgroundImage
        h.style.transform = styler.transform
        h.style.transition = styler.transition
        h.style.width = styler.width
        h.style.height = styler.width
        h.style.maxWidth = styler.maxWidth
        h.style.maxHeight = styler.maxHeight
        h.style.fontSize = styler.fontSize
        h.style.fontWeight = styler.fontWeight
        h.style.fontFamily = styler.fontFamily
    }
    document.body.appendChild(h)
    h.onclick = this.clicked
    h.onmouseover = this.onMouseOver
    h.onchange = this.onChange
    h.setAttribute('id', this.id)
}