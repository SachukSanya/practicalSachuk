console.log(massiv(5));

function massiv(n){
    if (n <= 0)
        return "ne, menyiay chislo";
    let array = [];
    while (n >= 1){
        array.push(n);
        n--;
    }
    return array;
}