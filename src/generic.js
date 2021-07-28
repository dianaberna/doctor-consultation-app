
export function createContent(tag, text) {
    const isContent = document.createElement(tag);
    isContent.appendChild(document.createTextNode(text));
    return isContent;
}

export function printSearchBar(page){
    // TODO implementare la ricerca 
    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("id","textSearch");
    input.setAttribute("placeholder","Search for doctors")
    page.appendChild(input);
  
    var input = document.createElement("input");
    input.setAttribute("type","submit");
    input.setAttribute("id","submitSearch");
    input.setAttribute("value","");
    page.appendChild(input);
}