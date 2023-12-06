function numberCheck(arr){
    let largest = arr[0]
    let secLargest = arr[0]
    for(i=0;i<arr.length;i++){
        if(largest<arr[i]){
            secLargest = largest
            largest = arr[i]
        }
        else if(arr[i]>secLargest && arr[i]<largest){
            secLargest = arr[i]
        }
    }
    return console.log(secLargest)
}

numberCheck([5,10,7,3])
numberCheck([15,2,31,22,5,64])