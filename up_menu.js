function toggleTileContainer() {
    var tileContainer = document.getElementById('tileContainer');
    tileContainer.classList.toggle('show');
    var button = document.getElementById('toggleButton');
    if (button.innerHTML === '+') {
        button.innerHTML = '-';
    } else {
        button.innerHTML = '+';
    }
}
