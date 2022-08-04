let num = 0;
let jsonString = localStorage.getItem("num");
let save = JSON.parse(jsonString);
num = num + save - 1;
function addOne() {
    num++;
    document.getElementById("number").innerHTML = num;
    localStorage.setItem("num", JSON.stringify(num));
}
document.getElementById("number").innerHTML = save;