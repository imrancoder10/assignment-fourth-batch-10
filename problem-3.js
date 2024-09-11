/**
 * problem - 3
 */

function checkDigitsInName(name) {
  if(typeof name === 'string'){
   const array = name.split('');
   const nunbersOfArray = [];
   for(const letter of array){
      if(letter == parseInt(letter)){
      nunbersOfArray.push(letter);
      }   
   }
   if(nunbersOfArray.length === 0){
      return false;
   }
   else{
      return true;
   }    

  }
  else{
   return 'Invalid Input';
  }
}


const result = checkDigitsInName(["Raj"]);
console.log(result);