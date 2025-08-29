// Heart Count
let count = 0;
const icons = document.getElementsByClassName("icon");

for (const icon of icons) {
  icon.addEventListener("click", function () {
    count++;
    document.getElementById("love-count").innerText = count;
  });
}
// Copy Section
function copyText(id) {
  const number = document.getElementById(id).innerText;
  navigator.clipboard.writeText(number);
  alert(`নম্বর কপি হয়েছে : ${number}`);
}
// Copy Count
let copyCount = 0;
const btns = document.getElementsByClassName("copy-btn");

for (const btn of btns) {
  btn.addEventListener("click", function () {
    copyCount++;
    document.getElementById("copy-count").innerText = copyCount;
  });
}

// Attach events to buttons
document.getElementById("national-btn").onclick = () =>
  copyText("national-number");
document.getElementById("police-btn").onclick = () => copyText("police-number");
document.getElementById("fire-btn").onclick = () => copyText("fire-number");
document.getElementById("ambulance-btn").onclick = () =>
  copyText("ambulance-number");
document.getElementById("women-btn").onclick = () => copyText("women-number");
document.getElementById("anti-btn").onclick = () => copyText("anti-number");
document.getElementById("electricity-btn").onclick = () =>
  copyText("electricity-number");
document.getElementById("brac-btn").onclick = () => copyText("brac-number");
document.getElementById("railway-btn").onclick = () =>
  copyText("railway-number");

let callCoin = Number(document.getElementById("call-coin").innerText);
const universalContainer = document.getElementById("box-4");

// Reusable function
function addCallEntry(titleId, numberId) {
  const title = document.getElementById(titleId).innerText;
  const number = document.getElementById(numberId).innerText;
  const currentTime = new Date().toLocaleTimeString();

  const div = document.createElement("div");
  div.innerHTML = `
      <div class="flex call-history-section">
        <div class="call-history-section-name">
          <h3 class="inter">${title}</h3>
          <span class="hind-madurai">${number}</span>
        </div>
        <div><p class="hind-madurai call-history-section-date">${currentTime}</p></div>
      </div>
    `;
  universalContainer.appendChild(div);
  document.getElementById("clear-btn").addEventListener("click", function () {
    div.innerHTML = "";
  });
}

// Reusable function
function handleCall(buttonId, titleId, numberId) {
  const button = document.getElementById(buttonId);
  button.addEventListener("click", function () {
    const title = document.getElementById(titleId).innerText;
    const number = document.getElementById(numberId).innerText;
    if (callCoin >= 20) {
      callCoin -= 20;
      document.getElementById("call-coin").innerText = callCoin;
      addCallEntry(titleId, numberId);
      alert(`📞Calling ${title} ${number}`);
    } else {
      alert(`❌ আপনার পর্যাপ্ত কয়েন নেই; কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
    }
  });
}

// Attach call buttons
handleCall("national-call", "national-title", "national-number");
handleCall("police-call", "police-title", "police-number");
handleCall("fire-call", "fire-title", "fire-number");
handleCall("ambulance-call", "ambulance-title", "ambulance-number");
handleCall("women-call", "women-title", "women-number");
handleCall("anti-call", "anti-title", "anti-number");
handleCall("electricity-call", "electricity-title", "electricity-number");
handleCall("brac-call", "brac-title", "brac-number");
handleCall("railway-call", "railway-title", "railway-number");
