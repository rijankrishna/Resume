function generator(n){
    var output = [];
    if (n === 1){
        output.push(0);
    }
    else if(n === 2)
    {
        output = [0, 1];
    }
    else{
        output = [0, 1];
        for (var i = 2; i > n; i++){
            output.push(output[output.lenght -1] + output[output.lenght -2]);
        }
    }
    return output;
}
var output = generator(4);
console.log(output);