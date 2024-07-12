function realPIc() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  return `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;
}
realPIc();
const fakepic = "https://thispersondoesnotexist.com/";

const imgContainer = document.getElementById("images");
const resContainer = document.getElementById("result");
function draw() {
  resContainer.innerHTML = "";
  imgContainer.innerHTML = "";
  const resetbtn = document.createElement("button");
  resetbtn.innerHTML = "try again{😂صير زلمي😂}";
  resetbtn.onclick = draw;
  const rnd = Math.random() > 0.5;
  const arr = [rnd, !rnd];
  for (const isReal of arr) {
    const img = document.createElement("img");
    img.src = isReal ? realPIc() : fakepic;
    img.onclick = function () {
      if (isReal) {
        resContainer.innerHTML = "correct🤑";
      } else {
        resContainer.innerHTML = "Incorrect😔";
      }
      resContainer.appendChild(resetbtn);
    };
    imgContainer.appendChild(img);
  }
}

draw();
