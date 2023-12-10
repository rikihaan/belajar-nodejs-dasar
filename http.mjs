/**
 * NodeJS memiliki standart liubrary untuk http
 * Salah satu fitur di modeule http adalah Http client, dimana kita bisa melakukan simulasi http request menggunakann NodeJs
 * Terdapat 2 jenis module http di nodejs yaitu http dan https
 * https://nodejs.org/dist/latest-v16.x/docs/api/http.html
 * https://nodejs.org/dist/latest-v16.x/docs/api/https.html
 */

import https from 'https';
const url = 'https://eol2xln1qa30his.m.pipedream.net';

const request = https.request(url,{
    method: "POST",
    headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
    }
},(response)=>{
    response.addListener("data",function(data){
        console.info(`receive: ${data.toString()}`)
    })
});

const body = JSON.stringify({
    firstname:"Asep",
    lastname:"Riki"
});

request.write(body);
request.end()