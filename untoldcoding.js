
const text =
  "Dear Love ,  I wanna Say Something.         I wanna say that you mean the world to me. Your laughter, your kindness, your unwavering support—these are the things I find myself craving more than ever. Life seems a little less colorful without your presence by my side. There's a void in my heart that only your love can fill. I thank you for always be there for me, loving me and taking good care of me. I know that I may not be a best boyfriend that you'll have but I promise that I will be the best for you eyyy. I LOVE YOU SO MUCH FROM THE BOTTOM OF MY HEART, always chase your dreams cuz no matte what Im always be here by your side. I LOVE YOUUUUUUU<3    ....................  .";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
