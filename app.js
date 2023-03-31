const videoContainer = document.getElementById("video-container");

fetch("./videos/")
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const html = parser.parseFromString(data, "text/html");
    const videoLinks = Array.from(html.querySelectorAll("a")).filter(a => a.href.endsWith(".mp4"));
    videoLinks.forEach(videoLink => {
      const video = document.createElement("video");
      video.src = `./videos/${videoLink.href.split("/").pop()}`;
      video.muted = false;
      video.controls = true;
      videoContainer.appendChild(video);
    });
  });
