function diffArray(arr1, arr2) {
    let twoArr = [...arr1, ...arr2];
    let newArr = [];
    for (let i =0; i<twoArr.length; i++) {
         console.log(twoArr[i])
         if (!arr1.includes(twoArr[i]) && arr2.includes(twoArr[i]) || arr1.includes(twoArr[i]) && !arr2.includes(twoArr[i]) )   {
     newArr.push(twoArr[i]);
    } }
     return newArr;
    }
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); 



    