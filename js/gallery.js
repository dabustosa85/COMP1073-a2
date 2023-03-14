
// Selecciona todos los elementos img dentro de la galería y los convierte en un array
// Selects all img elements within the gallery and converts them into an array
var thumbs = Array.from(document.querySelectorAll('#gallery li img'));

// Agrega un evento click a cada imagen pequeña
// Adds a click event to each small image
thumbs.forEach(function(thumb) {
    thumb.addEventListener('click', function() {
        // Obtener la URL de la imagen grande y el título
        // Get the URL of the large image and the title
        var largeImgUrl = this.src.replace('-small', '-large');
        var title = this.getAttribute('data-title');

        // Cambiar la imagen grande y el título
        // Change the large image and title
        var largeImg = document.querySelector('#gallery figure img');
        largeImg.src = largeImgUrl;
        var caption = document.querySelector('#gallery figure figcaption');
        caption.textContent = title;

        // Cambiar la imagen activa
        // Change the active image
        var activeThumb = document.querySelector('#gallery li img.active');
        if (activeThumb) {
            activeThumb.classList.remove('active');
        }
        this.classList.add('active');
    });
});

