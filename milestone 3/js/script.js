const box = document.querySelector('.container');
for(let i = 1 ; i <= 100 ; i++){
    let toPrint;
    let color;
    if( (i % 3 !== 0) && ( i % 5 !== 0)){
        console.log(i);
        toPrint = i;
        color = 'base';
    }else if(( i % 3 === 0) && ( i % 5 !== 0)){
        console.log('Fizz');
        toPrint = 'fizz';
        color = toPrint;
    }else if(( i % 3 !== 0) && (i % 5 === 0)){
        console.log('Buzz');
        toPrint = 'buzz';
    }else {
        console.log('FizzBuzz')
        toPrint = 'fizzbuzz';
        color = toPrint;
    }
    const newBox = `<div class="box ${color}">${toPrint}</div>`;

    box.innerHTML += newBox;
}