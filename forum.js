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
  var blinkingtext = document.getElementById("blinker");
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

function Blinking2() {
  var blinkingtext2 = document.getElementById("blinker2");
  if (blinkingtext2) {
    var span2 = document.createElement("span2");
    span2.textContent = blinkingtext2.textContent;
    span2.style.opacity = 1;
    blinkingtext2.innerHTML = "";
    blinkingtext2.appendChild(span2);
    setTimeout(function () {
      span2.style.opacity = 0;
    }, 500);
  }
}

setInterval(Blinking2, 1000);

function Blinking3() {
  var blinkingtext3 = document.getElementById("blinker3");
  if (blinkingtext3) {
    var span3 = document.createElement("span3");
    span3.textContent = blinkingtext3.textContent;
    span3.style.opacity = 1;
    blinkingtext3.innerHTML = "";
    blinkingtext3.appendChild(span3);
    setTimeout(function () {
      span3.style.opacity = 0;
    }, 500);
  }
}

setInterval(Blinking3, 1000);

function Blinking4() {
  var blinkingtext4 = document.getElementById("blinker4");
  if (blinkingtext4) {
    var span4 = document.createElement("span4");
    span4.textContent = blinkingtext4.textContent;
    span4.style.opacity = 1;
    blinkingtext4.innerHTML = "";
    blinkingtext4.appendChild(span4);
    setTimeout(function () {
      span4.style.opacity = 0;
    }, 500);
  }
}

setInterval(Blinking4, 1000);

function Blinking5() {
  var blinkingtext5 = document.getElementById("blinker5");
  if (blinkingtext5) {
    var span5 = document.createElement("span5");
    span5.textContent = blinkingtext5.textContent;
    span5.style.opacity = 1;
    blinkingtext5.innerHTML = "";
    blinkingtext5.appendChild(span5);
    setTimeout(function () {
      span5.style.opacity = 0;
    }, 500);
  }
}

setInterval(Blinking5, 1000);

function Blinking6() {
  var blinkingtext6 = document.getElementById("blinker6");
  if (blinkingtext6) {
    var span6 = document.createElement("span6");
    span6.textContent = blinkingtext6.textContent;
    span6.style.opacity = 1;
    blinkingtext6.innerHTML = "";
    blinkingtext6.appendChild(span6);
    setTimeout(function () {
      span6.style.opacity = 0;
    }, 500);
  }
}

setInterval(Blinking6, 1000);
