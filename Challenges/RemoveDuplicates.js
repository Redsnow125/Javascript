function removeDuplicates(arr){
    for(i=0;i<arr.length;i++){
         for(j=i+1;j<arr.length;j++){
             if(arr[i] === arr[j]){
                 arr.splice(j,1)
             }
         }
    }
    return console.log(arr)
}

removeDuplicates([1, 2, 2, 3, 4, 4, 5])