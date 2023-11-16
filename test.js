arr=[1,2,3,4,5];
b=[];
for (let i=0;i<arr.length-1;i++){
    b[i]=arr[i]
}
b[arr.length-1]=5;
console.log(b)