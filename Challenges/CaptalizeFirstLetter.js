let intialString = "this is my boom stick"
let splitString = intialString.split(" ")
let finalString = []

for(i=0;i<splitString.length;i++){
    let tempWord = splitString[i]
    tempWord = tempWord.split("")
    let letter = tempWord[0].toUpperCase()
    tempWord.shift()
    tempWord.unshift(letter)
    tempWord = tempWord.join("")
    finalString.push(tempWord)
}

finalString = finalString.join(" ")
console.log(finalString)
