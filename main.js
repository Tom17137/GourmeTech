document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".night-mode");

    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // change l’icône selon le mode
        if (document.body.classList.contains("dark-mode")) {
            toggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            toggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }
    });

    // sauvegarde du choix utilisateur
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggle.textContent = "☀️";
    }
});

document.addEventListener("DOMContentLoaded", () => {
  // Sélectionner tous les boutons favoris
  const favButtons = document.querySelectorAll(".fav-btn");

  favButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Inverse l'état du favori
      btn.classList.toggle("active");

      // Change le symbole du cœur
      if (btn.classList.contains("active")) {
        btn.textContent = "❤️"; // cœur plein
      } else {
        btn.textContent = "♡"; // cœur vide
      }
    });
  });
});

