/***
 * Util adalah standart library yang berisikan  utility-utility yang bisa digunakan untuk mempermudah pembuatan  kode nodeJs
 * https://nodejs.org/dist/latest-v16.x/docs/api/util.html
 */

import util from 'util';
console.info(util.format("nama: %s", "Riki"));


const person = {
	firstname: "Asep Riki",
	lastname: "Hari"
}

console.info(person);

// formta ke format json
console.info(util.format("Person : %j", person));
