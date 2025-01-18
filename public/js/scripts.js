
document.addEventListener("DOMContentLoaded", () => {
  // Fetch all music
  fetch("/api/music")
    .then((res) => res.json())
    .then((data) => {
      const musicList = document.getElementById("music-list");
      data.forEach((music) => {
        const div = document.createElement("div");
        div.innerHTML = `<strong>${music.title}</strong> by ${music.artist}`;
        musicList.appendChild(div);
      });
    });

  // Handle music upload
  document.getElementById("uploadForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const response = await fetch("/api/music", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    document.getElementById("uploadResponse").innerText = result.message || "Upload failed";
  });
});
