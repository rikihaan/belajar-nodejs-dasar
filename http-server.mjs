/**
 * Standart library HTTP juga tidak hanya bisa dignakan untuk melakukan http client, tapi juga bisa digunakan untuuk membuat http server
 * Untuk kasus sederhana cocok sekalai jika ingin Membuat http server menggunakan standart library nodeJs, namun untuk kasus yang lebih complek, direkomendadiskan menggunakan library atau framework yanglebih mudah penggunaan nya
 * https://nodejs.org/dist/latest-v16.x/docs/api/http.html
 */

import http, { request } from 'http';

const server = http.createServer((request,response)=>{
    console.info(request)

    if(request==='Riki'){
        response.write("Hello Riki")
        response.end();

    }else{

        response.write("Hello World");
         response.end();

    }
})

server.listen(3000)