calculate([1, 1, 3, 4, 4, 1, 3, 2]);

function calculate(array){
    console.log(array.reduce((a, b) => a + b) / array.length);
}