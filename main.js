
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


    
    
    
    
    