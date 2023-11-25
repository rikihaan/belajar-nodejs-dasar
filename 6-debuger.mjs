/***
 * Debuger
 * NodeJs memiliki fitur debuger, dimana kita bisa mengikuti tahapan eksekusi program di NodeJs
 * Hal ini sangat cocok ketika kita melakukan proses debuging, mencari sebab masalah yang terjadi di aplikasi kita
 * https://nodejs.org/dist/latest-v16.x/docs/api/debugger.html
 * 
 * 
 * Breakpoint
 * 
 * Dalam Debuger, terdapat istilah Breakpoint, yaitu dimana kita ingin menghentikan sementara eksekusi kode program
 * Biasanya ini dilakukan untuk mengawasi data-data di sekitar lokasi berhentinya tersebut
 * Untuk menambahkan breakpointk, kita bisa menggunakan katakunci debuger
 * 
 * MENJALANKAN MODE DEBUGER
 * jika menjalankan file javascritp hanya dengan menggunakn perintah node namafile.js, maka secara default dia tidak akan jalan dalam mode debug
 * Agar jalan di mode Debuger,kita harus menambahkan printah inspect
 * contoh node inspect namafile.js
 * 
 * 
 * Perintah Debuger
 * coun, c continue excecution
 * next, n Step next
 * step, s step in
 * out, o Step Out
 * paus, Pause running code
 */

function sayHello(name){
    debugger;
    return `Hello ${name}`;
}

const name ="Asep Riki";
console.info(sayHello(name));

