const inputBox = document.getElementById("input-box");
const list= document.getElementById("list");

function addTask(){
  if(inputBox.value==='') {

      alert("you must write something") ;
  }

  else{
     let li = document.createElement("li");
     li.innerHTML = inputBox.value ;
     list.appendChild(li);
     inputBox.value = "";
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);
     }}
list.addEventListener("click",function(c){
    if(c.target.tagName ==="LI"){
        c.target.classList.toggle("check");

    }
    else if(c.target.tagName ==="SPAN"){
        c.target.parentElement.remove();
    }
},false)