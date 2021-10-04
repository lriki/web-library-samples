
function add(a, b) {
    return "result:" + (a + b);
}

document.querySelector('.my_button').addEventListener('click', function() {
    alert('Hello! ' + mylib.add(1, 2));
});
