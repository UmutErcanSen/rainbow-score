document.getElementById("calculateBtn").addEventListener("click", function () {
  const criteriaCheckboxes = document.querySelectorAll(".form-check-input");
  let totalScore = 0;

  criteriaCheckboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      totalScore += parseFloat(checkbox.value);
    }
  });

  totalScore *= 100; // Skalieren auf 100%

  const scoreDisplay = document.getElementById("scoreValue");
  scoreDisplay.textContent = totalScore.toFixed(0);

  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = totalScore + "%";

  const successMessage = document.getElementById("successMessage");
  if (totalScore >= 70) {
    successMessage.textContent = "Super! Die Chancen stehen sehr gut! 😊👌";
    successMessage.classList.remove("alert-danger", "alert-warning");
    successMessage.classList.add("alert-success");
    progressBar.classList.remove("bg-danger", "bg-warning");
    progressBar.classList.add("bg-success");
  } else if (totalScore >= 31) {
    successMessage.textContent =
      "Gut! Die Chancen stehen nicht schlecht, einen Versuch ist es wert! 🫡🤞";
    successMessage.classList.remove("alert-danger", "alert-success");
    successMessage.classList.add("alert-warning");
    progressBar.classList.remove("bg-danger", "bg-success");
    progressBar.classList.add("bg-warning");
  } else {
    successMessage.textContent =
      "Schade! Die Chancen stehen leider nicht sehr gut! 😒👎";
    successMessage.classList.remove("alert-success", "alert-warning");
    successMessage.classList.add("alert-danger");
    progressBar.classList.remove("bg-warning", "bg-success");
    progressBar.classList.add("bg-danger");
  }

  // Button-Animation
  $("#calculateBtn").animate({ opacity: "0.5" }, 100, "swing", function () {
    $(this).animate({ opacity: "1" }, 100, "swing");
  });
});
