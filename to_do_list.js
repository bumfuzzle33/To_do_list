let container = document.getElementById("list");
let id_counter = 0;
let counter = 0;
 // var blob = new Blob(["This is my first text."], {type: "text/plain;charset=utf-8"});
    // saveAs(blob, "testfile1.txt");
function checked(id){
    let button = document.getElementById(`button${id}`);
    if(button.value){
        button.value=undefined;
        button.style.backgroundColor = "#f77f00";
        button.childNodes[0].setAttribute("class","fa fa-check-circle-o");
        button.previousSibling.style.textDecoration = "none";
    }
    else{
        button.value = 1;
        button.style.backgroundColor = "rgb(76, 216, 11)";
        button.childNodes[0].setAttribute("class","fa fa-repeat");
        button.previousSibling.style.textDecoration = "line-through";
    } 
}
function empty_list(){
    container.innerHTML="";
    counter=0;
    id_counter = 0;
}
function add(){
    counter++;
    id_counter++;
    let text = document.getElementById("input_text");
    let box = document.createElement("div");
    let btn = document.createElement("span");
    let icon = document.createElement("i");
    icon.setAttribute("class","fa fa-check-circle-o");
    btn.appendChild(icon);
    btn.setAttribute("id",`button${id_counter}`);
    btn.setAttribute("onclick",`checked(${id_counter})`);
    box.setAttribute("id","list1");
    box.value=2;
    box.innerHTML=`${counter}. ${text.value}`;
    text.value="";
    container.appendChild(box);
    container.appendChild(btn);   
}
function clear_completed(){
    let minuser =0;
    for(let i = 1;i<container.childNodes.length;i++){
        if(container.childNodes[i].value===1){
            container.removeChild(container.childNodes[i]);
            container.removeChild(container.childNodes[i-1]);
            i--;
            counter--;
            minuser++;
        }
        else if(container.childNodes[i].value!==2){
            let text_store = container.childNodes[i-1].innerHTML;
            let num = parseInt(text_store.slice(0,1))-minuser;
            text_store = num + text_store.slice(1);
            container.childNodes[i-1].innerHTML = text_store;
        }
    }
}
function save_list(){
    let text="";
    for(let i =0;i<container.childNodes.length;i++){
        if(container.childNodes[i].value===2){
            text+=container.childNodes[i].innerHTML;
            text+='\n';
        }
    }
    let file = new Blob([text],{type:"text/plain;charset=utf-8"});
    saveAs(file,"List.txt");
}
function press(){
    if(window.event.code==="Enter")
        add();
}