const fibonacci = (amount) => {
    let result = '';
    let number = 1;
    let wrapper = [];
    for(let i = 0; i <= amount; i++){
        wrapper.push(i);
        result += number + number;

        for(let j = 0; j <= i; j++){

        }

        result += '\n';

    }
    console.log(result);
}


fibonacci(5);

// let one = 1;
// for(let i = 0; i <= 4; i++){
//     for(let x = 0; x <= i; x++){
//         wrapper.push(one);
//         wrapper[0] + wrapper
//     }
//     console.log(wrapper);
//     wrapper = [];
// }
