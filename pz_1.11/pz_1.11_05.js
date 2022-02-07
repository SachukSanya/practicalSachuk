console.log(check(31));

function check(n) {
    let info;

    info = n >= 0 ? "pozitiff, " : "negatiff, ";

    let i = 2
    let type = "neproste,"
    while (i < n){
        if (n % i == 0)
            break;
        else
            type = "proste,";
        i++;
    }
    info += type;

    let mass = [2, 5, 3, 6, 9];
    info += mass.map(a => (n % a == 0 ? " diletsya" : " nediletsya") + " na " + a);

    return info;
}