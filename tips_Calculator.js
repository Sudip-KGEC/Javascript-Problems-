// Tips Calculator 

function calculatetips (amount , tipParcentage=0 , locale , currency){
 
     const result = {}
     
     if(tipParcentage){
        tipParcentage.map((percentage)=> {
           

           const formatNumber = new Intl.NumberFormat(locale , {
            style: 'currency',
            currency: currency,
          });

          result[percentage] = formatNumber.format((amount * percentage) / 100)
        })
     }
     
    if(tipParcentage === 0){
        return "Kipte customer"
    }

     return result;
}


console.log(calculatetips(1000 , [5 , 10 , 15] , 'en-IN' , 'INR'))
console.log(calculatetips(7000 , [5 , 10 , 15] , 'en-US' , 'USD'))