// convert transpose of an matrics

function transposematrics (inputArray){

    const rows = inputArray.length;
    let cols = inputArray[0].length;

    for ( let row of inputArray){

        cols = Math.max(cols , row.length)
    }

    const result = []

    for( let i = 0 ; i < rows ; i++){

        for(let j = 0 ; j < cols ; j++){

            if(!result[j]){
                result[j] = []
            }


            result[j][i] = inputArray[i][j]
           
        }
    }

    return result


}

const inputMatrics = [ [3 , 5] , [4 , 6] , [5 , 7], [2 , 5 , 7 ]];

console.log(transposematrics(inputMatrics))