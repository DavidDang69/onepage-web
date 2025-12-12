fetch("data/gallery.json")
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById("gallery-container");

    Object.keys(data).forEach(category => {
      data[category].forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = category;
        img.classList.add("gallery-img");
        gallery.appendChild(img);
      });
    });
  });
