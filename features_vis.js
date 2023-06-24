window.addEventListener('scroll', function() {
    var features = document.querySelectorAll('.features');
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < features.length; i++) {
      var feature = features[i];
      var featurePosition = feature.getBoundingClientRect().top;
  
      if (featurePosition - windowHeight <= -100) {
        feature.classList.add('show');
      }
    }
  });