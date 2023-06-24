window.onload = function() {
  var blackBox = document.querySelector('.black-box');
  var text = blackBox.innerHTML;
  var textLength = text.length;

  // добавляем описание в начало блока blackbox
  blackBox.innerHTML = '<div class="text">';
  blackBox.innerHTML += '</div>';

  // сохраняем ссылку на блок текста в переменной
  var textBox = document.querySelector('.text');

  var i = 0;
  var interval = setInterval(function() {
    if (text.charAt(i) === "h") {
      // при нахождении символа "x" добавляем перенос строки в текст
      textBox.innerHTML += "<br>";
    }
    else if (text.charAt(i) === "x") {
      // при нахождении символа "x" добавляем перенос строки в текст
      textBox.innerHTML += "<br><br>";
    } else {
      textBox.innerHTML += text.charAt(i);
    }
    i++;
    if (i > textLength) {
      clearInterval(interval);
    }
  }, 4); // скорость появления текста (в миллисекундах)

  blackBox.style.display = 'block'; // Показываем черную область после того, как текст напечатан

  // добавляем стили для блока описания и блока текста
  document.querySelector('.description').style.borderTopLeftRadius = '10px';
  document.querySelector('.description').style.borderTopRightRadius = '10px';
  document.querySelector('.description').style.borderBottomLeftRadius = '0px';
  document.querySelector('.description').style.borderBottomRightRadius = '0px';
  document.querySelector('.text').style.borderRadius = '10px';
  document.querySelector('.text').style.marginTop = '10px';
};