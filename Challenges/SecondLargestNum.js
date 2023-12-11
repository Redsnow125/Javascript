function numberCheck(arr){
    let largest = arr[0]
    let secoundLargest = arr[0]
    for(i=0;i<arr.length;i++){
        if(largest<arr[i]){
            secoundLargest = largest
            largest = arr[i]
        }
        else if(arr[i]>secoundLargest && arr[i]<largest){
            secoundLargest = arr[i]
        }
    }
    return console.log(secoundLargest)
}

numberCheck([5,10,7,3])
numberCheck([15,2,31,22,5,64])