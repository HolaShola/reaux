// Two arrays are called similar if one can be obtained from another 
// by swapping at most one pair of elements in one of the arrays.
// Given two arrays a and b, check whether they are similar.

// For a = [1, 2, 3] and b = [1, 2, 3], the output should be areSimilar(a, b) = true.
// The arrays are equal, no need to swap any elements.

// For a = [1, 2, 3] and b = [2, 1, 3], the output should be areSimilar(a, b) = true.
// We can obtain b from a by swapping 2 and 1 in b.
// For a = [1, 2, 2] and b = [2, 1, 1], the output should be
// areSimilar(a, b) = false.

// Any swap of any two elements either in a or in b won't make a and b equal.
function areSimilar(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (b.indexOf(a[i]) == -1) {
            return false;
        } else {
            delete b[b.indexOf(a[i])];
        }
    }
    let res = b.join('');
    if (res.length) {
        return false;
    } else {
        return true;
    }
}

// function areSimilar(a, b) {
//     const ad = a.filter((v,i)=>v!=b[i])
//     const bd = b.filter((v,i)=>v!=a[i])
//     return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
// }

console.log(areSimilar([4, 6, 3], [3, 4, 6]));
console.log(areSimilar(
    [832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
    [832, 570, 148, 998, 533, 561, 455, 147, 894, 279]
));