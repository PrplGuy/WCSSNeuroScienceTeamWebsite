document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("showLeadersBtn");
  const gallery = document.getElementById("leaderGallery");

  button.addEventListener("click", () => {
    gallery.classList.toggle("hidden");
    button.textContent = gallery.classList.contains("hidden")
      ? "Show Leader Pictures"
      : "Hide Leader Pictures";
  });
});
