console.log('bobbyhadz.com');

const imageInput = document.getElementById('img-input');

imageInput.addEventListener('change', event => {
  // 👇️ Save the image to localStorage
  const image = event.target.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', () => {
    localStorage.setItem('image', reader.result);
  });

  if (image) {
    reader.readAsDataURL(image);
  }

  // 👇️ Take the image from localStorage
  // and display it
  const newImage = document.getElementById(
    'img-from-local-storage',
  );

  newImage.src = localStorage.getItem('image');
});
