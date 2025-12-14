document.addEventListener("DOMContentLoaded", () => {
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

  // png/jpg/jpeg 확장자 자동 탐색
  async function findValidImagePath(basePath) {
    const extensions = ["png", "jpg", "jpeg"];
    for (const ext of extensions) {
      const url = `${basePath}.${ext}`;
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (res.ok) return url;
      } catch (e) {}
    }
    return null;
  }

  // 카테고리 버튼 클릭
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const type = btn.dataset.type;

      desc.textContent = descriptions[type];
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
});

// ===== 전역 함수 (HTML onclick용) =====
function downloadImage() {
  const image = document.getElementById("main-image");
  const link = document.createElement("a");
  link.href = image.src;
  link.download = "my-style-image.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

let likeCount = 0;
function likeImage() {
  likeCount++;
  document.getElementById("like-count").textContent = likeCount;
}
