// Lightbox script
function openLightbox(img) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = img.src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// GitHub API: Fetch stars and forks
fetch("https://github.com/mushkaan0205/ATM-simulation-using-Tkinter-")
    .then(res => res.json())
    .then(data => {
        document.getElementById("stars").textContent = data.stargazers_count || "0";
        document.getElementById("forks").textContent = data.forks_count || "0";
    })
    .catch(err => console.error("GitHub API error:", err));
