let n = 5;
let array = [];
for (let i = 0 ; i < n; i++) {
    array[i] = [];
    for (let j = 0; j < n; j++) {
        array[i][j] = Math.floor(Math.random() * (100 + 100) - 100);
    }
}
console.log(array);

function change(array){
    for (let i = 0 ; i < array.length; i++) {
        array[i][i] = array[i][i] < 0 ? 0 : 1;
    }
    return array;
}
console.log(change(array));
