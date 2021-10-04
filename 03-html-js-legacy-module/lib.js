
/*
(function (global) {
    function add(a, b) {
        return a + b;
    }
    global.mylib = {
        add: add
    };
}(this));
*/

mylib = {};

mylib.add = function(a, b) {
    return a + b;
};
