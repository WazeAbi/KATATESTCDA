for(let i=0 ; i<=100 ;i++){
    let divNumber3 = i % 3;
    let divNumber5 = i % 5;
        if((divNumber3 == 0)&&(divNumber5 == 0)){
            console.log("fizzbuzz");
        }
        else if (divNumber5 == 0)
        console.log( "Fizz");
    else if (divNumber5 == 0)
        console.log( "Buzz");
        else console.log(i);

    }