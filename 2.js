// Program mengurutkan angka

const log = console.log;

const urutKata = (strings) => {
    let str = strings.split(' ');
    let wordsLength = str.length;
    let result = [];

    // Perulangan ini untuk mengulangi aksi sebanyak jumlah array
    // Bisa juga untuk dimanfaatkan untuk kondisi nanti
    for(let i = 1; i <= wordsLength; i++){

        // Perulangan ini untuk mengecek string yang mengandung angka yang berurutan
        for(let x = 0; x < wordsLength; x++){ 
            if(str[x].includes(i)){
                result.push(str[x]);
            }
            // console.log(toArr[x] + ' ' + toArr[x].includes(i));
        }
        // console.log('\n');
        // console.log(result);
    }
    
    // console.log(wordsLength);
    console.log(result.join(' '));

}

urutKata("ta3hun menjela2ng se1lamat b4aru");


