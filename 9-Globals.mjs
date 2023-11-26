/**
 * Didalam nodeJs terdapat variable atau function secara global bisa diakses dari mana saja, tanpa harus melakukan import
 * kita bisa gunakan
 * Kita bisa melihat detailnya apa saja fitur yang terdapat secara global dihalaman documnetasinya
 * https://nodejs.org/dist/latest-v16.x/docs/api/globals.html
 */

// salah satu cotoh nya
setTimeout(function(){
    console.info("Hello Wolrd");
},3000);

setInterval(()=>console.info('Hello World'),3000)