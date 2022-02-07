console.log(unDuplicate([1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6]));

function unDuplicate(array){
    return array.filter((item, i, ar) => ar.indexOf(item) === i);
}