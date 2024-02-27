document.addEventListener("DOMContentLoaded", () => {
  displayScores();
});

function displayScores() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  const scoreTableBody = document.querySelector("#score-table tbody");
  scoreTableBody.innerHTML = ""; // Mevcut içeriği temizle

  // Skorları tabloya ekle
  scores.forEach((score, index) => {
    const row = scoreTableBody.insertRow();
    const cellRank = row.insertCell();
    const cellName = row.insertCell();
    const cellScore = row.insertCell();
    cellRank.textContent = index + 1;
    cellName.textContent = score.name;
    cellScore.textContent = score.score;
  });
}
