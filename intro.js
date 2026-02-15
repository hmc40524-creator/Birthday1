const lines = [
    "ก๊อกๆๆ Hello, welcome! 👀",
    "If you’re seeing this message, it means today must be a special day.",
    "There’s something waiting for you to see. ✨🌻",
   
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

  
