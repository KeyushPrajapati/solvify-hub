// Gallary
// Function to replace the main image and apply the border
function replaceMainImg(selectedImage) {
    // Replace the main image's src with the clicked image's src
    const mainImage = document.getElementById('mainImage');
    mainImage.src = selectedImage.src;

    // Remove the border from all gallery images
    const galleryImages = document.querySelectorAll('.gallary-img');
    galleryImages.forEach(img => img.classList.remove('selectedImg'));

    // Add the border to the clicked image
    selectedImage.classList.add('selectedImg');
  }

  // Initial setup: Apply border to the image matching the main image's src
  window.onload = function () {
    const mainImageSrc = document.getElementById('mainImage').src;
    const galleryImages = document.querySelectorAll('.gallary-img');
    galleryImages.forEach(img => {
      if (img.src === mainImageSrc) {
        img.classList.add('selectedImg');
      }
    });
  };