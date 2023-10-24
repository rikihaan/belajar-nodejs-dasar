/***
 * Awal ketika nodejs rilis, fitur javascript modules belum rilis, namun sekarang banyak menggunakan  javascript modeules
 * NodeJs pun awalnya tidak menggunakan javascript modeules, namun sekarang nodeJs sudah menggunakan node modules, dan sangat direkomendasikan untuk menggunakannya
 * Namun awal sebelum Modules, NodeJs menggunakan function require() untuk melakukan import file
 * dimateri ini saya bahas, agar tidak bingung ketika kita melihat tutorial masih menggunakan function require
 */

const os = require("os");
console.info(os.platform());
console.info(os.cpus());
console.info(os.homedir());
