function factorial(num){
    let total = 1
    for(i=1;i<=num;i++){
        total = total * i;
    }
    return console.log(total)
}

factorial(5)