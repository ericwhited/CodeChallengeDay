
  function Stringy(num) {
      //   creates empty array
        var arr = [];
      //   loops through saying push a 1 and a 0 for half the number given since each number takes up half of the total
        for(i=0; i<num /2 ; i++) {
          arr.push('1');
          arr.push('0');
        }
      //   joins the array together 
        console.log(arr.join(''));  
      
      }
      Stringy(4);
    
    // at first i was returng something like 
    // Stringy(2); >> '1010' so i tried cutting the number given in half
    // and it worked. maybe a little over 30 mins. 


// ---------------------------------------------------------------------------------------

function bkwdsList(num) {
  //   turned the numbers into a string and placed into a variable
    var numString = num.toString();
  //   made that variable = an array of the numbers split up
    numString = numString.split('');
  //   reverse that array
    numString.reverse();
  //   set up a new array that the strings could be placed in
    var newArr = [];
  //   coverted each string into a number and pushed them into that new array
    for(i=0; i<numString.length; i++) {
      newArr.push(Number(numString[i]));
    }
  //   console logged the new array
    console.log(newArr); 
  }
  
  bkwdsList(1234);
  
  
  // My thinking was kind of all over the place. I had to get more familiar 
  // with some of the array methods for this to work correctly so I was 
  // pretty unorganized. Couldnt tell you all of the different things i've
  // tried. Took much longer than 30 mins... more like over an hour.
  
  
// ---------------------------------------------------------------------------------------


//Fib 

//I started by creating an array that had the first two numbers 
//in the sequence so that they could be added together.

function fibNums() {
  nums = [1, 1];
  
// Then i said take the first index in the array and 
// add it to the next. Repeat this process and add one to the index each time.
// at the end at the answer to the numbs array.  
// We did this 100 times. 

  
  for(i=0; i<100; i++) {
    nums.push(nums[i] + nums[i + 1]);
    
  }
  
//Then print the array and you get the fib sequence.
  
  console.log(nums);
  
}

fibNums();

//------------------------------------------------------------------------------------------

// Online store

//saying that each check will check a code and a date
function checkCoup(code, date) {
  
  //defining valid codes
  var validCodes = ["code1", "code2", "code3"];
  
  //defining an expiration date
  var expDate = "Sept 14th, 2018";
  
  //chchking the code
    function codeCheck() {
    for(i=0; i<validCodes.length; i++) {
    if(code == validCodes[i]) {
      return true;
    }
    }
    }
  //checking date
  function dateCheck() {
    if(date == expDate) {
      return false;
   }else {
      return true;
  }
  
  if(dateCheck && codeCheck == true) {
    return true;
  } else {
    return false
  }
  
}
};
  
// Im trying to say if the code checker returns 
// true and the expDate returns false the coup is valid




//------------------------------------------------------------------------
// Email input 

// At least one letter at the beginning 
// All chars between 1st and @ char must be
// letters, numbers, or underscores
// there must be an @ 
// after the @ there must be one word char (letter num or underscore) or - 
// must end with a . and one or more word chars 

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordChar = ['_', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0] + letters;

function emailCheck(str) {
//   console.log(str);
  
  var email = str.split('');       //split into array
  console.log(email);
  
  //check if the first character is a letter
//   for(i=0; i<letters.length;i++) {
//     if(email[0] === letters[i]) {
//       console.log(true);
//     }
//   }

  
var whereAt = email.indexOf('@');  //finding the index of the "@" so i can try to say any index between the first index and the "@" index need to be w/e rules.
for(i=0; i<whereAt; i++) { //trying to loop through all the index up until the @ sign
  if(i == wordChar[i]) {
    console.log(true);
  } else {
    console.log(wordChar[i]);
  }
}




} //end of func


emailCheck('eejw03@gmail.com');
