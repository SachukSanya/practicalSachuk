sort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]);
function sort (array) {
    let result = [];
    for (let i = 0; i < array.length; i++){
        result = result.concat(array[i]);
    }
    console.log(result.sort((a,b) => a - b));
}