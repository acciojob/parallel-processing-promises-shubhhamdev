//your JS code here. If required.
// Function to download an image
function downloadImage(image) {
    return new Promise((resolve, reject) => {
        const imgElement = new Image();
        imgElement.src = image.url;

        imgElement.onload = () => resolve(imgElement);
        imgElement.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
    });
}

// Event listener for the "Download Images" button
btn.addEventListener("click", () => {
    const imagePromises = images.map(downloadImage);

    Promise.all(imagePromises)
        .then(imageElements => {
            // Clear existing content in the output div
            output.innerHTML = '';

            // Append image elements to the output div
            imageElements.forEach(imageElement => {
                output.appendChild(imageElement);
            });
        })
        .catch(error => {
            console.error(error);
        });
});

const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];
