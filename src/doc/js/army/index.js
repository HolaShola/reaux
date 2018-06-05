// /**
// * Задание #1. Что выведет в консоль данный код? Переписать код в функциональном стиле.
// */

function foo(arr) {
    for (var i = 0; i < arr.length; i++) {
        setTimeout(function() {
            console.log(arr[i]);
        }, 100);
    }
}

foo([1, 2, 3, 4, 15]);
