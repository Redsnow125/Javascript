let sentence = "The quick brown fox jumps over the lazy dog"
let split = sentence.split(" ")
let lengthtest = 0;
let arrnum = 0

for (i=0;i<split.length;i++){
    if(lengthtest<split[i].length){
        lengthtest = split[i].length
        arrnum = i
    }
}
console.log(split[arrnum])