/**
 * Event adalah standart library di nodeJs yang bisa digunakan Sebagai implementasi Event Listener  
 * Didalam Events, tedapat sebuah class EventEmitter yang bisa digunakan untuk menampung data perjenis event
 * lalu kita bisa  melakukan emmit untuk mentrigger jenis event  dan mengirim dan ke event tersebut
 * https://nodejs.org/dist/latest-v16.x/docs/api/events.html
 * 
 * 
 */

import { EventEmitter } from "events";

const emitter = new EventEmitter();


emitter.on("sayHello",function(name){
    console.info(`Hello ${name}`);
})

emitter.emit("sayHello","Asep Riki");

emitter.addListener("sayHello",function(name){
    console.info(`Hi Welcome ${name}`);
});

emitter.emit("sayHello","Randi");
