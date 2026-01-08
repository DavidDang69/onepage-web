document.addEventListener("DOMContentLoaded", () => {

    // Contact
    fetch("data/contact.json")
        .then(response => response.json())
        .then(data => {
            const contactSection = document.getElementById("contact");
            contactSection.innerHTML = `
                <h2>${data.contact.title}</h2>
                <p>${data.contact.content.replace(/\n/g, "<br>")}</p>
            `;
        })
        .catch(error => console.error("Chyba při načítání Contact:", error));

    // Work with us
    fetch("data/work.json")
        .then(response => response.json())
        .then(data => {
            const workSection = document.getElementById("work-us");
            workSection.innerHTML = `
                <h2>${data.work.title}</h2>
                <p>${data.work.content}</p>
            `;
        })
        .catch(error => console.error("Chyba při načítání Work With Us:", error));

});
