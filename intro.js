const lines = [
    "ก๊อกๆๆ เชี่ยมีคนเข้ามาวะไนท์ 👀",
    "เฮ้ยเป็นไปได้ไง บุคคลธรรมดาไม่น่าจะเข้ามาได้นะว่าแต่คุณเป็นใครหรอ.....",
    "ชั่งมันๆมึง ไหนๆก็เข้ามาละ",
    "ดูอะไรหน่อยมั้ยละ(อยากโชว์) 🌻✨"
  ];
  
  let lineIndex = 0;
  let charIndex = 0;
  
  const text = document.getElementById("text");
  const btn = document.getElementById("btn");
  
  function typeWriter() {
    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        text.innerHTML += lines[lineIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 70);
      } else {
        text.innerHTML += "<br>";
        lineIndex++;
        charIndex = 0;
        setTimeout(typeWriter, 500);
      }
    } else {
      btn.style.display = "inline-block";
      btn.onclick = openModal;
    }
  }
  
  function openModal() {
    document.getElementById("readyModal").classList.remove("hidden");
  }
  
  function closeModal() {
    document.getElementById("readyModal").classList.add("hidden");
  }
  
  function goCake() {
    window.location.href = "cake.html";
  }
  
  typeWriter();
  