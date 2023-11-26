/**
 * Readline merupakan standart libelary yang digunakan untuk membaca input
 * Namun pada saat di buta video ini , Readline  hanya mendukung versi callback di NodeJs LTS versi 16
 * Di NodeJs 17 sudah mendukung Promise sehingga lebih mudah untuk diguakan, namun itupun masih tahap exspreimental
 * https://nodejs.org/dist/latest-v16.x/docs/api/readline.html
 */

import proses from "process";
import readline from 'readline'

const input = readline.createInterface({
    input:proses.stdin,
    output:proses.stdout
});

input.question("Siapakah nama Anda?",(name)=>{
    console.info(`Hello ${name}`)
    input.close();
    
})

