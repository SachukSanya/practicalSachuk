const numbers = [5, 5, 10, 5, 5];
console.log(unique(numbers));

function unique (array){
    if (array.length < 3 || array.length % 2 == 0)
        return "ne nifiga";
    return parseInt(array.filter((number, index, array) => array.indexOf(number)));
}