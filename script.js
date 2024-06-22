function copyClip(text) {
  navigator.clipboard.writeText(text).then(function() {
    console.log('Copying to clipboard was successful!');
  }, function(err) {
    console.error('Could not copy text: ', err);
  });
  alert("copied text to clipboard ("+text+")");
}

function image() {
  var randomNumber = Math.floor(Math.random() * 5);
  document.getElementById("pattern").style.backgroundImage = `url("./pattern${randomNumber}.svg")`;
}