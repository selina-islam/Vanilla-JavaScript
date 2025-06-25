let number= 6;

if(number % 2 ===0){
    console.log('Even')
}else{
    console.log('Odd')
}
console.log(number)

// If a number gives a remainder of 0 when divided by 2, it is an even number.
// If the remainder is 1, then it is an odd number.
// In JavaScript, we use the % (modulus operator) to get the remainder.
// For example: 7 % 2 gives a remainder of 1 → so 7 is an odd number.
// If we use number = 8, then 8 % 2 = 0 → so 8 is an even number.



for(let i =0; i<10; i++){
    if(i % 2 === 0){
        console.log(i + 'is Even')
    }
    else{
        console.log(i+ 'is odd')
    }
}

document.getElementById('even').innerHTML= `The number ${number} is Even`