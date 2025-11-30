const contentArea = document.getElementById("content-area");
const desc = document.getElementById("desc");
const grid = document.getElementById("image-grid");

const descriptions = {
  fashion: "검색 키워드: monochrome streetwear",
  product: "검색 키워드: minimalist gadget design",
  interior: "검색 키워드: futuristic interior",
  art: "검색 키워드: metallic sculpture",
  color: "검색 키워드: black silver color scheme",
};

const folderNames = {
  fashion: "fashion",
  product: "product",
  interior: "interior",
  art: "art",
  color: "color"
};

// png/jpg/jpeg 확장자를 자동 탐색하는 헬퍼 함수
async function findValidImagePath(basePath) {
  const extensions = ["png", "jpg", "jpeg"];
  
  for (const ext of extensions) {
    const url = `${basePath}.${ext}`;
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) return url; // 실제 존재하면 그 경로 사용
    } catch (e) {
      continue;
    }
  }
  return null;
}

document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const type = btn.dataset.type;

    // 설명문구 표시
    desc.textContent = descriptions[type];

    // 이미지 로드
    grid.innerHTML = "";
    for (let i = 1; i <= 9; i++) {
      const base = `assets/${folderNames[type]}/img${i}`;
      const validPath = await findValidImagePath(base);

      if (validPath) {
        const img = document.createElement("img");
        img.src = validPath;
        grid.appendChild(img);
      }
    }

    contentArea.classList.remove("hidden");
    contentArea.scrollIntoView({ behavior: "smooth" });
  });
});
