// Script Sederhana - Praktikum Cloudflare Workers Static Assets
document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById("checkBtn");
  const result = document.getElementById("result");

  if (checkBtn && result) {
    checkBtn.addEventListener("click", () => {
      result.textContent = "JavaScript berhasil berjalan di browser.";
    });
  }
});
