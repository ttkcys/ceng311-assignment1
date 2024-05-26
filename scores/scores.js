document.addEventListener("DOMContentLoaded", () => {
  displayScores();
  document.getElementById("save-info").addEventListener("click", saveInfo);
});

function displayScores() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  const scoreTableBody = document.querySelector("#score-table tbody");
  scoreTableBody.innerHTML = "";

  // Add scores to the table
  scores.forEach((score, index) => {
      const row = scoreTableBody.insertRow();
      const cellRank = row.insertCell();
      const cellName = row.insertCell();
      const cellScore = row.insertCell();
      const cellLevel = row.insertCell();
      cellRank.textContent = index + 1;
      cellName.textContent = score.name;
      cellScore.textContent = score.score;
      cellLevel.textContent = score.level || "N/A"; // Default to "N/A" if no level
  });
}

function goBack() {
  window.history.back();
}

function saveInfo() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  let scoresJSON = JSON.stringify(scores, null, 2);

  // Create a blob from the scores JSON
  let blob = new Blob([scoresJSON], { type: "application/json" });
  
  // Create a link to download the blob
  let link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "scores.json";
  
  // Trigger the download
  link.click();
}
