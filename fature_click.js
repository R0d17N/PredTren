  function displayImage(imageId) {
    var imageUrl = getImageSource(imageId);
    if (imageUrl) {
      var overlay = document.getElementById('imageOverlay');
      var imageElem = document.getElementById('popupImage');
      imageElem.src = imageUrl;
      overlay.style.display = 'block';
    }
  }

  function getImageSource(imageId) {
    var imageUrl;
    switch(imageId) {
      case 'image1':
        var imageUrl = 'menu.jpg';
        return imageUrl;       
      case 'image2':
        var imageUrl = 'list.jpg';
        return imageUrl;   
      case 'image3':
        var imageUrl = 'graphic.jpg';
        return imageUrl;   
      default:
        imageUrl = '';
    }
    return imageUrl;
  }

  function closeImageOverlay() {
    var overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
  }