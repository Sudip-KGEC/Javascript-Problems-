//    1
//   121
//  12321

function printNumberPyramid (number) {
    
   for(let i =1 ; i <= number ; i++){
     
    let content = ""

for( let space = 1 ; space <= number - i; space++){
    content += " "
   }

   for(let count = 1 ; count <= i ; count++){
    content += count
   }

   for(let revCount = i - 1 ; revCount > 0 ; revCount--){
    content += revCount
   }

   console.log(content)
}

}

printNumberPyramid(5)