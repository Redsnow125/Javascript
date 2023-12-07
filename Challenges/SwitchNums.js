function switchNums(num1,num2){
    console.log(`The first num was ${num1} the secound is ${num2}`)
    let temp = num1
    num1 = num2
    num2 = temp
    return console.log(`The first num is now ${num1} the secound is ${num2}`)
}
switchNums(5,10)