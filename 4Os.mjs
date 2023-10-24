/***
 * OS
 * OS merupakan standart libray yang bisa diguanakan untuk mendapatkan informasi sistem operasi yang digunakan
 * https://nodejs.org/dist/latest-v16.x/docs/api/os.html
 */

import os from "os";

console.info(os.arch());
console.info(os.platform());
console.info(os.cpus());
console.info(os.uptime());
console.info(os.freemem());
console.info(os.networkInterfaces());