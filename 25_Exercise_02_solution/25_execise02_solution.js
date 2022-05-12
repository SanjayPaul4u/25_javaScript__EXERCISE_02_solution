
console.log("This tutorial is solution of excercise 02.");
//Creating div
let creatDiv = document.createElement("div");

let val =localStorage.getItem("text");
let text;
if(val===null){
    text = document.createTextNode("This element is updated");
}
else{
    text = document.createTextNode(val);
}

creatDiv.appendChild(text);
creatDiv.setAttribute("class", "elemCreDiv");
creatDiv.setAttribute("id", "elemCreDiv1");
creatDiv.setAttribute("style", "border: 2px solid red ; width: 300px; height: 150px; text-align: center; margin-bottom: 50px");

//Getting container and box from html.
let container = document.querySelector("#mainContainer");
let box = document.querySelector(".box");

//Inserted created div in containet before boxlist
container.insertBefore(creatDiv, box);

console.log(creatDiv, container, box);





//add event listener  on created div
creatDiv.addEventListener("click", function(){
    let noOfTextArea = document.getElementsByClassName("textArea").length;

    if(noOfTextArea === 0){

    let html = elemCreDiv1.innerHTML;
    creatDiv.innerHTML = `<textarea name="" id="textAreaId"  cols="30" rows="8" class="textArea">${html}</textarea>
    `;//style="border: none;"
    } 
    console.log(noOfTextArea);



      //add blur listener on textarea
      let textarea = document.querySelector(".textArea");

      textarea.addEventListener("blur", function(){
          elemCreDiv1.innerHTML = textarea.value;
  
          localStorage.setItem("text",textarea.value)
      })



      

})




