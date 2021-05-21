let i = 0;
let txt = "Aspiring Full Stack Developer And Cybersecurity Enthusiast";
const tag = document.getElementById("typewrite");
let speed = 50;
tag.innerHTML = "";

function typeWriter() {
  if (i < txt.length) {
    tag.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();
