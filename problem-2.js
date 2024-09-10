/**
 * Problem - 2
 */


function sendNotification(email) {
   if(email.indexOf('@') !== -1){
        const array = email.split('@');
        userName = array[0];
        domainName = array[1];
        return userName + ' sent you an email from ' + domainName;
   }
   else{
    return 'Invalid Email';
   }
}

const result = sendNotification('imran hossian@gmail.com');
console.log(result);

