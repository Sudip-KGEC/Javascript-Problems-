

// two matrics multipication

function matricsMultipication(m1, m2) {

    if (m1[0].length !== m2.length) {
        throw new Error("Number of columns in the first matrix must be equal to the number of rows in the second matrix.");
    }


    const rowsResult = m1.length;
    const colsResult = m2[0].length;


     const rowsInM2 = m2.length;

     const result = [];

     for(let i = 0 ; i < rowsResult; i++) {

        for(let j = 0 ; j < colsResult; j++) {
            let sumValue = 0;

            for(let n = 0 ; n < rowsInM2 ; n++){
                sumValue += m1[i][n] * m2[n][j];
            }
     
            if(!result[i])  result[i] = [];

              result[i][j] = sumValue; 
        } 
     }

    

    return result;
};


const matrix1 = [[1, 2 , 3], 
                 [3, 4 , 8]];
const matrix2 = [[5, 6], 
                 [7, 8] , [7, 9]];

console.log(matricsMultipication(matrix1, matrix2));