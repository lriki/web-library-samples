import { add } from "./lib.js"

document.querySelector('.my_button').addEventListener('click', function() {
    alert('Hello! ' + add(1, 2));
});
