let isOpen = false;

function toggleLetter() {
  const letter = document.getElementById("letter");

  if (!isOpen) {
    letter.classList.remove("hidden");
    isOpen = true;
  } else {
    letter.classList.add("hidden");
    isOpen = false;
  }
}
