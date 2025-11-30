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

document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;

    // 설명문구 반영
    desc.textContent = descriptions[type];

    // 이미지 9개 로드
    grid.innerHTML = "";
    for (let i = 1; i <= 9; i++) {
      const img = document.createElement("img");
      img.src = `assets/${folderNames[type]}/img${i}.jpg`;
      img.alt = `${type} 이미지 ${i}`;
      grid.appendChild(img);
    }

    contentArea.classList.remove("hidden");
    contentArea.scrollIntoView({ behavior: "smooth" });
  });
});
