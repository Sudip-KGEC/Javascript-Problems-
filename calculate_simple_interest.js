
// calculate simple interest 

function calculateSimpleInterest (amount , interest , years) {
    return (amount * (interest / 100) * years).toFixed(2)
};

console.log(calculateSimpleInterest(2000 , 10.7 , 3))

