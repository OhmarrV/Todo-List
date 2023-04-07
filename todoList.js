var liNodes = [];
function listAdd(){
    //trim() method is used to remove any leading or trailing whitespace from the input value.
    var txtVal = document.getElementById('input-text').value.trim();
    if(txtVal != ""){
        var listNode = document.getElementById('list');
        var liNode = document.createElement("LI");
        var txtNode = document.createTextNode(txtVal);
        const button = document.createElement("button");
      // const button2 = document.createElement("button");

        button.setAttribute("id", "remove-action");
        button.setAttribute("onclick", "listRemove()");
        button.textContent = "x";

        // button2.setAttribute("id", "edit-action");
        // button2.setAttribute("onclick", "editText(this)");
        // button2.textContent = "edit";

        liNode.appendChild(txtNode);
        liNode.appendChild(button);
       // liNode.appendChild(button2);
        listNode.appendChild(liNode);
        

    // Add the new liNode to the array
        liNodes.push(liNode);
        
        clearTxt();
    }
}

function listRemove(){
    if (liNodes.length > 0) {
        // Remove the last added liNode from the array and from the DOM
        var liNodeToRemove = liNodes.pop();
        
        liNodeToRemove.parentNode.removeChild(liNodeToRemove);
        
    }
}

function clearTxt(){
    document.getElementById('input-text').value = "";
}

function enterPress(){
    if(event.keyCode == 13){
        listAdd();
        document.getElementById('input-text').value = "";
    }
  }

function editText(button2){
    var liNode = button2.parentNode;
    var textNode = button2.nextSibling;
    textNode.contentEditable = "true";
}
