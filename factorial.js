function factorial(num) {
    var product = 1;
    for( var i = num; i> 1; i--) {
        product = num * product;
    }
    return product;

}

console.log(factorial(4));
