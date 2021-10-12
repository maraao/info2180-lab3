document.addEventListener('DOMContentLoaded', function() {
    let boxes = document.getElementById('board').children
    for (var x = 0; x<=8; x++) {
        boxes[x].classList.add('square')
    }
});
