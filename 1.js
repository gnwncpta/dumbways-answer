const chalk = require('chalk');

// Di suatu penangkaran terdapat 6.969 Burung
// Setiap 21 Hari tersebut serempak menetaskan satu loverbird baru
// Namun sebelum melahirkan 11,1% dari burung loverbird mati
// Buatkanlah program untuk menghitung dan mengetahui jumlah burung lovebird setelah 441 Hari.

// 6.969 Burung
// rumus: percent * jumlahBurung / 100

// let burung = 6969;
// let child = 2;
// let percent = 11.1;
// let hundred = 100;
// let isDead = Math.floor(percent * burung / hundred);
// let sisaBurung = Math.floor(burung - isDead);
// let jumlahBurung = sisaBurung

// burung case
// console.log(sisaBurung * child);

const countBird = (burung) => {
    let percent = 11.1;
    let generation = [];
    generation.push(burung);

    for(let i = 1; i <= 21; i++) {
        let bird = generation[i - 1]; // 6969
        let birdDead = Math.floor(percent * bird / 100); // 773
        let birdNow = bird - birdDead; // 6969 - 773
        let birdGen = birdNow * 2; // 6169 * 2 = 12392
        generation.push(birdGen);
        console.log(`${chalk.green(`Generation ${i}:`)} ${chalk.yellow(`${generation[generation.length - 1]}`)} `);
    }

    console.log(`${chalk.blue(`Total Burung di Hari 441 adalah: ${generation[generation.length - 1]}`)}`);
}

countBird(6969);