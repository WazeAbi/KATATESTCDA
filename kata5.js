function testNumb( Number ) {
    if ( Number < 0 )
    Number *= -1;
    if ( Number == 0 ) {
    result = "vrai";
  }


  else if ( Number == 1 ) {
    result = "faux"; 
  }

  else {
    Number = Number - 2;
    testNumb( Number );
  }

return result;
}
console.log(testNumb(50));
console.log(testNumb(75));
console.log(testNumb(-1));