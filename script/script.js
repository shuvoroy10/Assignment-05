// Heart Count
let count = 0;
const icons = document.getElementsByClassName("icon");

for (const icon of icons) {
    icon.addEventListener("click", function() {
        count++;
        document.getElementById("love-count").innerText = count;
    });
}
// Copy Section
function copyText(id) {
    const number = document.getElementById(id).innerText;
    navigator.clipboard.writeText(number);
    alert(`নম্বর কপি হয়েছে : ${number}`)
}
// Copy Count
let copyCount = 0;
const btns = document.getElementsByClassName("copy-btn");

for (const btn of btns) {
    btn.addEventListener("click", function() {
        copyCount++;
        document.getElementById("copy-count").innerText = copyCount;
    });
}

// Attach events to buttons
document.getElementById("national-btn").onclick = () => copyText("national-number");
document.getElementById("police-btn").onclick = () => copyText("police-number");
document.getElementById("fire-btn").onclick = () => copyText("fire-number");
document.getElementById("ambulance-btn").onclick = () => copyText("ambulance-number");
document.getElementById("women-btn").onclick = () => copyText("women-number");
document.getElementById("anti-btn").onclick = () => copyText("anti-number");
document.getElementById("electricity-btn").onclick = () => copyText("electricity-number");
document.getElementById("brac-btn").onclick = () => copyText("brac-number");
document.getElementById("railway-btn").onclick = () => copyText("railway-number");
