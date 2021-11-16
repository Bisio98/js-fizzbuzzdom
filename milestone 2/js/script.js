const box = document.querySelector('.container');
for(let i = 1 ; i <= 100 ; i++){
    let toPrint;
    if( (i % 3 !== 0) && ( i % 5 !== 0)){
        console.log(i);
        toPrint = i;
    }else if(( i % 3 === 0) && ( i % 5 !== 0)){
        console.log('Fizz');
        toPrint = 'Fizz';
    }else if(( i % 3 !== 0) && (i % 5 === 0)){
        console.log('Buzz');
        toPrint = 'Buzz';
    }else {
        console.log('FizzBuzz')
        toPrint = 'FizzBuzz';
    }
    const newBox = `<div>${toPrint}</div>`;

    box.innerHTML += newBox;
}