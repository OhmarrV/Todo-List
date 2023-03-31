// //alert("Hello World");

// function listAdd(){
//     var txtVal = document.getElementById('input-text').value;
//     listNode = document.getElementById('list');
//     liNode = document.createElement("LI");
//     txtNode = document.createTextNode(txtVal);
    

//     liNode.appendChild(txtNode);
//     listNode.appendChild(liNode);

// }

// function listRemove(){
//     //document.getElementById("list").innerHTML = "";
//     listNode.removeChild(liNode);
    
//     // var myList = document.getElementsById('list');
//     // //var removeLi = myList.getElementsById(liNode)[0];
//     // myList.removeChild(liNode.getElementsByTagName("li")[0]);
// }




//chatGPT suggestion
var liNodes = [];
function listAdd(){
    //trim() method is used to remove any leading or trailing whitespace from the input value.
    var txtVal = document.getElementById('input-text').value.trim();
    if(txtVal != ""){
        var listNode = document.getElementById('list');
        var liNode = document.createElement("LI");
        var txtNode = document.createTextNode(txtVal);

        liNode.appendChild(txtNode);
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