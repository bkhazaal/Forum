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

function Blinking() {
  var blinkingtext = document.getElementById("blinkerHeader");
  if (blinkingtext) {
    var span = document.createElement("span");
    span.textContent = blinkingtext.textContent;
    span.style.opacity = 1;
    blinkingtext.innerHTML = "";
    blinkingtext.appendChild(span);
    setTimeout(function () {
      span.style.opacity = 0;
    }, 500);
  }
}
setInterval(Blinking, 1000);
