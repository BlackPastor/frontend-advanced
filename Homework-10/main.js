const audio = new Audio();

function getKeySound(keyCode) {
  if(keyCode === "KeyA") {
    return "./music/key1.mp3"
  }
  if(keyCode === "KeyS") {
    return "./music/key2.mp3"
  }
  if(keyCode === "KeyD") {
    return "./music/key3.mp3"
  }
  if(keyCode === "KeyF") {
    return "./music/key4.mp3"
  }
  if(keyCode === "KeyG") {
    return "./music/key5.mp3"
  }
  if(keyCode === "KeyH") {
    return "./music/key6.mp3"
  }
  if(keyCode === "KeyJ") {
    return "./music/key7.mp3"
  }
  if(keyCode === "KeyK") {
    return "./music/key8.mp3"
  }
}

function play(keyCode) {
  let src = getKeySound(keyCode);
  if(src) {
    audio.src = src;
    audio.play();
  }
}

function removeActive() {
  document.querySelectorAll(".button").forEach(button => button.classList.remove("active"));
}
document.body.addEventListener("keydown", function(e) {
  removeActive();
  let keyActive = document.querySelector("#key" + e.code.slice(-1));
  if(keyActive) {
    keyActive.classList.add("active");
    play("Key" + e.code.slice(-1));
  }
})

document.querySelectorAll(".button").forEach((button) => {
  button.onclick = () => {
    removeActive() ;
    button.classList.add("active");
    play("Key" + button.id.slice(-1));
  };
});



