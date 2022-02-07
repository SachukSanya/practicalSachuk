console.log(reverse([22, -1, 0, "her", 57]));

function reverse(array){
    return array.reverse().map(a => typeof a === 'number' ? a**2 : a);
}