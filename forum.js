function SaveToText() {
  const name = document.getElementById("name").value;
  const name2 = document.getElementById("name2").value;
  const number = document.getElementById("number").value;
  const pass = document.getElementById("pass").value;
  const textContent = `First: ${name}\n\nLast: ${name2}\n\nEmail: ${number}\n\nPass: That's a secret bro :/`;
  const blob = new Blob([textContent], { type: "text/plain" });
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = "formData.txt";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

var colors = ["black", "white"];
var headers = document.querySelectorAll("h1");

function Blinking() {
  headers.forEach((header, index) => {
    header.style.color = colors[index % colors.length];
  });
}

setInterval(Blinking, 1000);
