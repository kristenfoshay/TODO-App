function getInputValue(){
           
    let inputVal = document.getElementById("myInput").value;
    let source = document.getElementById("lu");
   
    let node = document.createElement("li");
  
    let newli = source.appendChild(node);
   newli.textContent += inputVal;
  localStorage.setItem("inputVal",JSON.stringify(inputVal));
  JSON.parse(localStorage.getItem("inputVal"));
   let button = document.createElement('button');
button.textContent = "Remove";

newli.appendChild(button);
   
   
}

let el = document.getElementById("btn");
el.addEventListener("click", getInputValue, false);

let parent = document.getElementById('lu');

parent.addEventListener("click", function(event) {
if (event.target.tagName === "BUTTON") {
event.target.parentElement.remove();
}else if (event.target.tagName === "LI"){event.target.style.textDecoration = "line-through";}
}); 