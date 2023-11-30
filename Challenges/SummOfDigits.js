function summNumm (num){
    let total = 0
    let tempNum = 0
    num = num.toString()
    num = num.split("")

    for(i = 0; i<num.length - 1; i++){
         tempNum = parseInt(num[i])
        if(tempNum !== NaN){
            total = total + tempNum
        }
    }
    return console.log(total)
}
summNumm("123x")
summNumm(1225756)
