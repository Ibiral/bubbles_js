const bubbleScore = document.querySelector("h2");
let score = 0;
const scoreMsg = document.querySelector(".scoreMsg");

const addBubble = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  bubble.addEventListener("click", () => {
    score++;
    bubbleScore.textContent = score;
    bubble.remove();
    if (score >= 10) {
      scoreMsg.innerHTML="Bravo !"
    }
  });

  setTimeout(() => {
    bubble.remove();
  }, 9000);
};

setInterval(addBubble, 1500);
