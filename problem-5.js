
/**
 * problem-5
 */


function  waitingTime(waitingTimes  , serialNumber) {
    if((Array.isArray(waitingTimes) === true) && (typeof serialNumber === 'number')){
        let sum = 0;
        for(const time of waitingTimes){
             sum += time;
        }
        timeAverage = Math.round(sum/waitingTimes.length);
        const remainingPerson = serialNumber-(waitingTimes.length+1);
        const remainingTimes = remainingPerson * timeAverage;
       return remainingTimes;
    }
    else{
        return 'Invalid Input';
    }
    

}


const result = waitingTime([13, 2, 6, 7, 10], 6);
console.log(result);