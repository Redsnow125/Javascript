let num = 600
let arr = [0,1]

for (i=1;i<num-1;i++){
    let temp = arr[i] + arr[i-1]
    arr.push(temp)
}
console.log(arr)