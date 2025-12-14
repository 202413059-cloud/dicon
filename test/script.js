const landing = document.getElementById("landing");
const test = document.getElementById("test");
const result = document.getElementById("result");

const startBtn = document.getElementById("start-btn");
const resultBtn = document.getElementById("result-btn");
const questionsDiv = document.getElementById("questions");

let answers = {};

// 🔹 임시 문항 2개 (구조 확인용)
const questions = [
  { id: 1, text: "나는 여백이 많은 디자인이 좋다." },
  { id: 2, text: "강한 색 대비가 있는 디자인이 좋다." }
];

// 시작 버튼
startBtn.onclick = () => {
  landing.classList.add("hidden");
  test.classList.remove("hidden");
  renderQuestions();
};

function renderQuestions() {
  questions.forEach(q => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
      <p>${q.id}. ${q.text}</p>
      <button class="choice-btn good">좋음</button>
      <button class="choice-btn mid">보통</button>
      <button class="choice-btn bad">싫음</button>
    `;

    const buttons = div.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.onclick = () => {
        answers[q.id] = btn.innerText;
        checkComplete();
        buttons.forEach(b => b.style.outline = "none");
        btn.style.outline = "3px solid black";
      };
    });

    questionsDiv.appendChild(div);
  });
}

function checkComplete() {
  if (Object.keys(answers).length === questions.length) {
    resultBtn.disabled = false;
  }
}

resultBtn.onclick = () => {
  test.classList.add("hidden");
  result.classList.remove("hidden");
  document.getElementById("result-title").innerText = "테스트 완료!";
  document.getElementById("result-desc").innerText =
    "이제 다음 단계에서 진짜 취향 분석을 붙입니다.";
};

