document.addEventListener("DOMContentLoaded", () => {

  /*********************************
   * 1️⃣ 디자인 취향 타입 정의 (10개)
   *********************************/
  const TYPES = {
    1: { name: "군더더기 없는 심플 라이프", desc: "미니멀. 여백의 미를 즐기고 깔끔하고 정돈된 디자인을 선호합니다." },
    2: { name: "이것저것 모두 좋아! 풍성한 수집가", desc: "맥시멀. 화려한 색상과 다양한 요소에서 즐거움을 느낍니다." },
    3: { name: "옛날 물건이 좋아! 레트로 감성파", desc: "빈티지. 따뜻한 색감과 아날로그 감성을 좋아합니다." },
    4: { name: "첨단 과학 마니아! 미래를 꿈꾸는 사람", desc: "하이테크. 디지털·미래적인 디자인에 끌립니다." },
    5: { name: "유행 안 타는 격식주의자", desc: "클래식. 대칭과 안정감 있는 전통적인 디자인을 선호합니다." },
    6: { name: "재미가 있어야지! 톡톡 튀는 아이디어 뱅크", desc: "개성파. 유머와 독특함이 있는 디자인을 좋아합니다." },
    7: { name: "마음이 편안해지는 힐링 디자인", desc: "자연주의. 부드럽고 조화로운 분위기에서 안정감을 느낍니다." },
    8: { name: "예쁜 게 최고! 눈높은 완벽주의자", desc: "심미성 우선. 시각적 완성도를 가장 중요하게 봅니다." },
    9: { name: "헤매는 건 싫어! 친절한 사용 설명서", desc: "사용자 중심. 직관적이고 사용하기 쉬운 디자인을 선호합니다." },
    10:{ name: "시선 강탈! 강렬한 인상파", desc: "대비/충격. 강한 대비와 임팩트 있는 디자인을 좋아합니다." }
  };

  /*********************************
   * 2️⃣ 점수 초기화
   *********************************/
  let scores = {};
  Object.keys(TYPES).forEach(k => scores[k] = 0);

  let answers = {}; // { questionId: "A" | "M" | "B" }

  /*********************************
   * 3️⃣ 문항 데이터 (25문항)
   *********************************/
  const QUESTIONS = [
    { id:1, text:"레이아웃", A:{type:2,desc:"빈 공간을 최소화하고 정보를 꽉 채운 디자인"}, B:{type:1,desc:"여백이 충분한 미니멀 디자인"} },
    { id:2, text:"폰트", A:{type:6,desc:"손글씨 같거나 개성 있는 폰트"}, B:{type:5,desc:"가독성 좋은 명조/고딕"} },
    { id:3, text:"그래픽 요소", A:{type:4,desc:"정교한 3D·사진"}, B:{type:7,desc:"단순한 2D"} },
    { id:4, text:"형태", A:{type:3,desc:"곡선·비정형"}, B:{type:1,desc:"직선·기하학"} },
    { id:5, text:"애니메이션", A:{type:10,desc:"빠르고 역동적"}, B:{type:7,desc:"느리고 부드러움"} },
    { id:6, text:"색상 수", A:{type:2,desc:"다양한 색상"}, B:{type:1,desc:"절제된 색상"} },
    { id:7, text:"색상 톤", A:{type:10,desc:"고채도 원색"}, B:{type:7,desc:"파스텔·무채"} },
    { id:8, text:"질감", A:{type:3,desc:"질감이 느껴짐"}, B:{type:4,desc:"매끄러움"} },
    { id:9, text:"주요 색상", A:{type:7,desc:"자연색"}, B:{type:4,desc:"모노톤"} },
    { id:10,text:"대비", A:{type:10,desc:"강한 대비"}, B:{type:7,desc:"약한 대비"} },
    { id:11,text:"사용성", A:{type:6,desc:"실험적"}, B:{type:9,desc:"직관적"} },
    { id:12,text:"정보 전달", A:{type:2,desc:"상징적"}, B:{type:9,desc:"명확"} },
    { id:13,text:"변화", A:{type:6,desc:"트렌디"}, B:{type:5,desc:"클래식"} },
    { id:14,text:"접근성", A:{type:8,desc:"심미성 우선"}, B:{type:9,desc:"편의성 우선"} },
    { id:15,text:"시스템", A:{type:5,desc:"규칙적"}, B:{type:6,desc:"자유"} },
    { id:16,text:"분위기", A:{type:6,desc:"유머러스"}, B:{type:5,desc:"진지"} },
    { id:17,text:"시간성", A:{type:3,desc:"과거지향"}, B:{type:4,desc:"미래지향"} },
    { id:18,text:"디테일", A:{type:2,desc:"장식적"}, B:{type:1,desc:"미니멀"} },
    { id:19,text:"조화", A:{type:10,desc:"대비 강조"}, B:{type:7,desc:"자연스러움"} },
    { id:20,text:"재료", A:{type:3,desc:"아날로그"}, B:{type:4,desc:"디지털"} },
    { id:21,text:"우선순위", A:{type:8,desc:"미적"}, B:{type:9,desc:"기능적"} },
    { id:22,text:"정렬", A:{type:6,desc:"비대칭"}, B:{type:5,desc:"대칭"} },
    { id:23,text:"해상도", A:{type:3,desc:"저해상도"}, B:{type:8,desc:"고해상도"} },
    { id:24,text:"균형", A:{type:10,desc:"긴장감"}, B:{type:1,desc:"안정감"} },
    { id:25,text:"평가", A:{type:8,desc:"내 기준"}, B:{type:9,desc:"대중 기준"} }
  ];

  /*********************************
   * 4️⃣ DOM 요소
   *********************************/
  const landing = document.getElementById("landing");
  const test = document.getElementById("test");
  const result = document.getElementById("result");
  const startBtn = document.getElementById("start-btn");
  const resultBtn = document.getElementById("result-btn");
  const questionsDiv = document.getElementById("questions");
  const resultTitle = document.getElementById("result-title");
  const resultDesc = document.getElementById("result-desc");

  if (!startBtn) return; // 안전 가드

  /*********************************
   * 5️⃣ 시작 버튼
   *********************************/
  startBtn.onclick = () => {
    landing.classList.add("hidden");
    test.classList.remove("hidden");
    renderQuestions();
  };

  /*********************************
   * 6️⃣ 문항 렌더링
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
          <button class="choice-btn">A가 더 좋다</button>
          <button class="choice-btn">둘 다 비슷</button>
          <button class="choice-btn">B가 더 좋다</button>
        </div>
      `;

      const btns = div.querySelectorAll(".choice-btn");
      btns[0].onclick = () => handleAnswer(q, "A", btns, btns[0]);
      btns[1].onclick = () => handleAnswer(q, "M", btns, btns[1]);
      btns[2].onclick = () => handleAnswer(q, "B", btns, btns[2]);

      questionsDiv.appendChild(div);
    });
  }

  /*********************************
   * 7️⃣ 점수 처리
   *********************************/
  function handleAnswer(q, choice, btns, clicked) {
    if (answers[q.id]) removeScore(q, answers[q.id]);
    answers[q.id] = choice;
    applyScore(q, choice);

    btns.forEach(b => b.classList.remove("selected"));
    clicked.classList.add("selected");

    if (Object.keys(answers).length === QUESTIONS.length) {
      resultBtn.disabled = false;
    }
  }

  function applyScore(q, c) {
    if (c === "A") scores[q.A.type] += 2;
    if (c === "M") { scores[q.A.type] += 1; scores[q.B.type] += 1; }
    if (c === "B") scores[q.B.type] += 2;
  }

  function removeScore(q, c) {
    if (c === "A") scores[q.A.type] -= 2;
    if (c === "M") { scores[q.A.type] -= 1; scores[q.B.type] -= 1; }
    if (c === "B") scores[q.B.type] -= 2;
  }

  /*********************************
   * 8️⃣ 결과 출력
   *********************************/
  resultBtn.onclick = () => {
    test.classList.add("hidden");
    result.classList.remove("hidden");

    const topType = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    resultTitle.innerText = TYPES[topType].name;
    resultDesc.innerText = TYPES[topType].desc;
  };

});
