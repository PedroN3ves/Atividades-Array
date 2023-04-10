function NewFunction(a, b){
    let NewArray = [];

    if(a.indexOf(b) !== -1){
        NewArray.push(b + a);
        return NewArray;
    } else{
        NewArray.push(a + b);
        return NewArray;
    }
}