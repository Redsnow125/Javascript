let word = "racecar"
let splitword = word.split("")
let array = splitword.reverse()
let reverse = splitword.join("")


if (word===reverse){
    console.log(`${word} is Paladrome`)
}
else{
    console.log(`${word} is not a Paladrome`) 
}