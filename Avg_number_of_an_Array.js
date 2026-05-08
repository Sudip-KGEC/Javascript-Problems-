// Calculate Avg number of an number array

function avgOfNumbers(arr) {
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    return total / arr.length
}

console.log(avgOfNumbers([2, 5, 3, 10, 5, 11]))