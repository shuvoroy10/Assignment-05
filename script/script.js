let count = 0;
const icons = document.getElementsByClassName("icon");

for (const icon of icons) {
    icon.addEventListener("click", function() {
        count++;
        document.getElementById("love-count").innerText = count;
    });
}

