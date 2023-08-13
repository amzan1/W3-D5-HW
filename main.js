const inputBox = document.querySelector("#inputBx");
const list = document.getElementById("listToDo");

inputBox.addEventListener('keyup',function(event){
    if(event.key == "Enter"){
        if(inputBox.value === ''){
            alert("you must write something!!")
        }
        else{
            let li = document.createElement("li")
            li.innerText = inputBox.value;
            list.appendChild(li);
            let span = document.createElement("span")
            span.innerText = "\u00d7"
            li.appendChild(span)

        }
        this.value = ""
        saveList()
    }
})


list.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked")
        saveList()
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveList()
    }
}, false)

function saveList(){
    localStorage.setItem("data",list.innerText)
}

function Task(){
    list.innerText = localStorage.getItem("data")
}
Task()



const clearComp = document.getElementById("clear");

clearComp.addEventListener("click",(a)=>{
    if(a.target.classList.toggle("checked")){
        document.getElementById("checked").target.parentElement.remove();
    
    }
})
