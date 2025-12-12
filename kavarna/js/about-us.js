document.addEventListener("DOMContentLoaded", () => {
    fetch("data/about.json")  // správná cesta k JSON
        .then(response => {
            if (!response.ok) throw new Error("Chyba při načítání JSON");
            return response.json();
        })
        .then(data => {
            const textEl = document.getElementById("about-us-text");
            textEl.textContent = data.about.content;
        })
        .catch(error => console.error("Chyba při načítání About Us:", error));
});
