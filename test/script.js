/*********************************
 * 1️⃣ 디자인 취향 타입 정의 (10개)
 *********************************/
const TYPES = {
  1: {
    name: "군더더기 없는 심플 라이프",
    desc: "미니멀. 여백의 미를 즐기고 깔끔하고 정돈된 디자인을 선호합니다."
  },
  2: {
    name: "이것저것 모두 좋아! 풍성한 수집가",
    desc: "맥시멀. 화려한 색상과 다양한 요소에서 즐거움을 느낍니다."
  },
  3: {
    name: "옛날 물건이 좋아! 레트로 감성파",
    desc: "빈티지. 따뜻한 색감과 아날로그 감성을 좋아합니다."
  },
  4: {
    name: "첨단 과학 마니아! 미래를 꿈꾸는 사람",
    desc: "하이테크. 디지털·미래적인 디자인에 끌립니다."
  },
  5: {
    name: "유행 안 타는 격식주의자",
    desc: "클래식. 대칭과 안정감 있는 전통적인 디자인을 선호합니다."
  },
  6: {
    name: "재미가 있어야지! 톡톡 튀는 아이디어 뱅크",
    desc: "개성파. 유머와 독특함이 있는 디자인을 좋아합니다."
  },
  7: {
    name: "마음이 편안해지는 힐링 디자인",
    desc: "자연주의. 부드럽고 조화로운 분위기에서 안정감을 느낍니다."
  },
  8: {
    name: "예쁜 게 최고! 눈높은 완벽주의자",
    desc: "심미성 우선. 시각적 완성도를 가장 중요하게 봅니다."
  },
  9: {
    name: "헤매는 건 싫어! 친절한 사용 설명서",
    desc: "사용자 중심. 직관적이고 사용하기 쉬운 디자인을 선호합니다."
  },
  10: {
    name: "시선 강탈! 강렬한 인상파",
    desc: "대비/충격. 강한 대비와 임팩트 있는 디자인을 좋아합니다."
  }
};

/*********************************
 * 2️⃣ 점수 저장소 초기화
 *********************************/
let scores = {};
Object.keys(TYPES).forEach(key => {
  scores[key] = 0;
});

/*********************************
 * 3️⃣ 문항 데이터 (25문항)
 *********************************/
const QUESTIONS = [
  {
    id: 1,
    text: "레이아웃",
    A: { type: 2, desc: "빈 공간을 최소화하고 정보를 꽉 채운 디자인" },
    B: { type: 1, desc: "여백이 충분하고 깔끔한 미니멀 디자인" }
  },
  {
    id: 2,
    text: "폰트",
    A: { type: 6, desc: "손글씨 같거나 독특하고 개성 있는 폰트" },
    B: { type: 5, desc: "가독성이 좋고 정돈된 명조/고딕 폰트" }
  },
  {
    id: 3,
    text: "그래픽 요소",
    A: { type: 4, desc: "정교한 3D 또는 사진 중심" },
    B: { type: 7, desc: "단순한 2D 일러스트" }
  },
  {
    id: 4,
    text: "형태",
    A: { type: 3, desc: "곡선·비정형 위주 디자인" },
    B: { type: 1, desc: "직선·기하학적 디자인" }
  },
  {
    id: 5,
    text: "애니메이션",
    A: { type: 10, desc: "빠르고 역동적인 애니메이션" },
    B: { type: 7, desc: "느리고 부드러운 움직임" }
  },
  {
    id: 6,
    text: "색상 수",
    A: { type: 2, desc: "다양한 색상의 화려한 팔레트" },
    B: { type: 1, desc: "절제된 소수 색상" }
  },
  {
    id: 7,
    text: "색상 톤",
    A: { type: 10, desc: "채도 높은 원색/네온" },
    B: { type: 7, desc: "파스텔·무채색" }
  },
  {
    id: 8,
    text: "질감 표현",
    A: { type: 3, desc: "질감이 느껴지는 표면" },
    B: { type: 4, desc: "매끄럽고 균일한 표면" }
  },
  {
    id: 9,
    text: "주요 색상",
    A: { type: 7, desc: "자연을 연상시키는 색" },
    B: { type: 4, desc: "블랙·화이트·그레이" }
  },
  {
    id: 10,
    text: "채도 대비",
    A: { type: 10, desc: "강한 색상 대비" },
    B: { type: 7, desc: "약한 대비" }
  },

  // 11~25
  {
    id: 11,
    text: "사용성",
    A: { type: 6, desc: "실험적인 인터페이스" },
    B: { type: 9, desc: "직관적인 인터페이스" }
  },
  {
    id: 12,
    text: "정보 전달",
    A: { type: 2, desc: "상징적·예술적 표현" },
    B: { type: 9, desc: "명확한 정보 전달" }
  },
  {
    id: 13,
    text: "변화",
    A: { type: 6, desc: "트렌디하고 자주 변함" },
    B: { type: 5, desc: "클래식하고 안정적" }
  },
  {
    id: 14,
    text: "접근성",
    A: { type: 8, desc: "심미성 우선" },
    B: { type: 9, desc: "접근성·편의성 우선" }
  },
  {
    id: 15,
    text: "시스템",
    A: { type: 5, desc: "철저한 규칙 기반" },
    B: { type: 6, desc: "자유로운 배치" }
  },
  {
    id: 16,
    text: "분위기",
    A: { type: 6, desc: "유머러스한 분위기" },
    B: { type: 5, desc: "진지한 분위기" }
  },
  {
    id: 17,
    text: "과거/미래",
    A: { type: 3, desc: "레트로·빈티지" },
    B: { type: 4, desc: "미래지향" }
  },
  {
    id: 18,
    text: "디테일",
    A: { type: 2, desc: "장식적 디테일 많음" },
    B: { type: 1, desc: "장식 최소화" }
  },
  {
    id: 19,
    text: "조화",
    A: { type: 10, desc: "주변과 대비" },
    B: { type: 7, desc: "자연스럽게 어우러짐" }
  },
  {
    id: 20,
    text: "재료 느낌",
    A: { type: 3, desc: "아날로그 재료 느낌" },
    B: { type: 4, desc: "디지털 재료 느낌" }
  },
  {
    id: 21,
    text: "우선순위",
    A: { type: 8, desc: "심미성 우선" },
    B: { type: 9, desc: "기능성 우선" }
  },
  {
    id: 22,
    text: "정렬",
    A: { type: 6, desc: "비대칭 정렬" },
    B: { type: 5, desc: "대칭 정렬" }
  },
  {
    id: 23,
    text: "해상도",
    A: { type: 3, desc: "개성 있는 저해상도" },
    B: { type: 8, desc: "완벽한 고해상도" }
  },
  {
    id: 24,
    text: "균형",
    A: { type: 10, desc: "긴장감 있는 균형" },
    B: { type: 1, desc: "안정적인 균형" }
  },
  {
    id: 25,
    text: "디자인 평가",
    A: { type: 8, desc: "내 기준이 중요" },
    B: { type: 9, desc: "보편적 평가 중시" }
  }
];

/*********************************
 * 4️⃣ 점수 부여 규칙
 *********************************/
// 좋음  → A +2
// 보통 → A +1, B +1
// 싫음 → B +2

/*********************************
 * 5️⃣ DOM 요소 연결
 *********************************/
const landingPage = document.getElementById("landing");
const testPage = document.getElementById("test");
const resultPage = document.getElementById("result");

const startBtn = document.getElementById("start-btn");
const resultBtn = document.getElementById("result-btn");
const questionsDiv = document.getElementById("questions");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");

let answers = {}; // { questionId: "good" | "mid" | "bad" }

/*********************************
 * 6️⃣ 시작 버튼 → 테스트 화면
 *********************************/
startBtn.onclick = () => {
  landingPage.classList.add("hidden");
  testPage.classList.remove("hidden");
  renderQuestions();
};

/*********************************
 * 7️⃣ 문항 렌더링
 *********************************/
function renderQuestions() {
  QUESTIONS.forEach(q => {
    const div = document.createElement("div");
    div.className = "question";

    div.innerHTML = `
      <p><strong>${q.id}. ${q.text}</strong></p>
      <p>A. ${q.A.desc}</p>
      <p>B. ${q.B.desc}</p>
      <div class="choices">
        <button class="choice-btn good">좋음</button>
        <button class="choice-btn mid">보통</button>
        <button class="choice-btn bad">싫음</button>
      </div>
    `;

    const buttons = div.querySelectorAll(".choice-btn");
    buttons.forEach(btn => {
      btn.onclick = () => {
        handleAnswer(q, btn.innerText, buttons);
      };
    });

    questionsDiv.appendChild(div);
  });
}

/*********************************
 * 8️⃣ 선택 처리 + 점수 계산
 *********************************/
function handleAnswer(question, choice, buttons) {
  // 이전 선택 점수 제거
  if (answers[question.id]) {
    removeScore(question, answers[question.id]);
  }

  // 선택 저장
  answers[question.id] = choice;
  applyScore(question, choice);

  // 버튼 시각 피드백
  buttons.forEach(b => b.style.outline = "none");
  event.target.style.outline = "3px solid black";

  checkAllAnswered();
}

/*********************************
 * 9️⃣ 점수 적용 / 제거
 *********************************/
function applyScore(q, choice) {
  if (choice === "좋음") {
    scores[q.A.type] += 2;
  } else if (choice === "보통") {
    scores[q.A.type] += 1;
    scores[q.B.type] += 1;
  } else if (choice === "싫음") {
    scores[q.B.type] += 2;
  }
}

function removeScore(q, choice) {
  if (choice === "좋음") {
    scores[q.A.type] -= 2;
  } else if (choice === "보통") {
    scores[q.A.type] -= 1;
    scores[q.B.type] -= 1;
  } else if (choice === "싫음") {
    scores[q.B.type] -= 2;
  }
}

/*********************************
 * 🔟 모든 문항 선택 확인
 *********************************/
function checkAllAnswered() {
  if (Object.keys(answers).length === QUESTIONS.length) {
    resultBtn.disabled = false;
  }
}

/*********************************
 * 1️⃣1️⃣ 결과 계산 & 출력
 *********************************/
resultBtn.onclick = () => {
  testPage.classList.add("hidden");
  resultPage.classList.remove("hidden");

  const resultType = getTopType();
  resultTitle.innerText = TYPES[resultType].name;
  resultDesc.innerText = TYPES[resultType].desc;
};

/*********************************
 * 1️⃣2️⃣ 최고 점수 타입 계산
 *********************************/
function getTopType() {
  let maxScore = -Infinity;
  let topTypes = [];

  for (let type in scores) {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      topTypes = [type];
    } else if (scores[type] === maxScore) {
      topTypes.push(type);
    }
  }

  // 동점이면 랜덤 1개
  return topTypes[Math.floor(Math.random() * topTypes.length)];
}
