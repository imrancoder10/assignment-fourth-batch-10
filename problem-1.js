/***
 * Problem-1: 
 */

function calculateTax(income, expenses) {
    if(0 <= income && 0 <= expenses){
        if(income >= expenses){
            remaining = income - expenses;
            giveTaxt = remaining * 0.20;
            return giveTaxt;
        }
        else{
            return 'Invalid Input';
        }
    }
    else{
       return 'Invalid Input';
    }

}


const result = calculateTax(2200, 7000);
console.log(result);

