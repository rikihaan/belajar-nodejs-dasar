/**
 * Proses merupakan standart Library yang digunakan untuk mendapatkan informasi proses NodeJs yang sedang Berjalan
 * Proses juga merupakan instance dari EventEmitter, sehingga kita bisa menambahkan listener kedalam proses
 * https://nodejs.org/dist/latest-v16.x/docs/api/globals.html
 */
// menambahkan ke EventEmitter
import process from 'process';

process.addListener("exit",function(exitCode){
    console.info(`NodeJs Exit with Code ${exitCode}`);
});

console.info(process.version);
console.info(process.argv);
console.info(process.report);
console.info(process.env);

