/**
 * problem - 4
 */

function calculateFinalScore(obj) {
   if(typeof obj === 'object' && Array.isArray(obj) == false){
    if((typeof obj.name === 'string') && ((typeof obj.testScore === 'number') && (obj.testScore <= 50 )) && ((typeof obj.schoolGrade === 'number') && (obj.schoolGrade <= 30)) && ((typeof obj.isFFamily === 'boolean') && ((obj.isFFamily === true) || (obj.isFFamily === false)))){
        // console.log('ok');
        if(obj.isFFamily === true){
            const familyScore = 20;
            const total = obj.testScore + obj.schoolGrade + familyScore;
            // console.log(total);
            if(total >=80){
                return true;
            }else{
                return false;
            }
        }
        else{
            const familyScore = 0;
            const total = obj.testScore + obj.schoolGrade + familyScore;
            // console.log(total);
            if(total >=80){
                return true;
            }else{
                return false;
            }
        }
        
    }
    else{
        return 'Invalid Input';
    }
   }
   else{
    return 'Invalid Input';
   }
  
}


// =====================================================

const result = calculateFinalScore(
    { name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true  }
);
console.log(result);
