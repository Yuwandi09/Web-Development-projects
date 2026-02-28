var count=0;

document.getElementById("decBtn").onclick = function() {
    count--;
    document.getElementById("number").textContent = count;
}

document.getElementById("incBtn").onclick = function() {
    count++;
    document.getElementById("number").textContent = count;
}

document.getElementById("resetBtn").onclick = function() {
    count=0;
    document.getElementById("number").textContent = count;
}