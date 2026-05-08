// two sum ad find target 

let arr  = [ 2 , 7 , 8, 9],  target = 10

let twoSumAndFindTarget = (arr , target) => {
   let map = {}
    for (let i = 0 ; i < arr.length ; i++){
        let diff = target - arr[i]; // 8

        if( map[diff] !== undefined){  // map[8] 
            return [diff , arr[i]];
        }
        map[arr[i]] = i
    }      
}

console.log(twoSumAndFindTarget(arr , target));