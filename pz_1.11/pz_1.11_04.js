function Add(a, b){
    return a + b;
}

function Sub(a, b){
    return a - b;
}

function Mul(a, b){
    return a * b;
}

function Div(a, b){
    if (b == 0)
        return "ne dili na 0!!!";
    return a / b;
}

function Calc(a, b, callback){
    try {
        if (!isNaN(a) && !isNaN(b))
            return callback(a, b);
        else
            return "vvedi pravilno, 2 chisla i functiyu";
    }
    catch (error){
        return error.name + ":" + "vvedi nazvu functii";
    }
}

console.log(Calc(10,0, Div));
console.log(Calc(10,2, Sub));
console.log(Calc(1,2, Add));
console.log(Calc(1,2));
console.log(Calc(1,"her", Div));