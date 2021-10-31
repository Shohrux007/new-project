const ism = document.getElementById("imya");

const gmail = document.getElementById("pochta");

document.getElementById("submit").addEventListener("click", getfunc);
function getfunc(){
    fetch("array.json")
    .then(res => {return (res.json())})
    .then(data => {data.push(ism.value); console.log(data);})  
    console.log(ism.value);
    console.log(gmail.value);
    this.style.backgroundColor="red";
}







