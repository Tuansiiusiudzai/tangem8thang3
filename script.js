document.getElementById('btn').addEventListener('click', function() {
  var image = document.getElementById('image');
  image.style.opacity = '0';
  setTimeout(function() {
    image.style.display = 'none';
  }, 200);
  document.body.style.backgroundColor = '#fff';
});
