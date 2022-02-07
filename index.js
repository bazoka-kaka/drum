const drums = document.querySelectorAll("button");

function soundAnimation(key) {
  let instrument = "";
  switch (key) {
    case "w":
      instrument = "crash";
      break;
    case "a":
      instrument = "kick-bass";
      break;
    case "s":
      instrument = "snare";
      break;
    case "d":
      instrument = "tom-1";
      break;
    case "j":
      instrument = "tom-2";
      break;
    case "k":
      instrument = "tom-3";
      break;
    case "l":
      instrument = "tom-4";
      break;
    default:
      instrument = "unknown";
      return;
  }
  const drum = document.querySelector("." + key);

  drum.classList.add("pressed");
  setTimeout(function () {
    drum.classList.remove("pressed");
  }, 100);

  const audio = new Audio(`sounds/${instrument}.mp3`);
  audio.play();
}

for (let i = 0; i < drums.length; ++i) {
  drums[i].addEventListener("click", function () {
    soundAnimation(drums[i].innerHTML);
  });
}

document.addEventListener("keydown", function (e) {
  const key = e.key;
  console.log(key);

  soundAnimation(key);
});
