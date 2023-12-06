/***
 * Worker Treads adalah standart Library yang bisa kita gunakan untuk menggunakan treads ketika mengeksekusi javascript secara pararel
 * Worker Treads Sangat cocok ketika kita membuat kode program yang butuh jalan secara pararel, dan biasanya kasusnya adalah ketika kode program kita membutuhkan proses yang CPU intensive, seperti misal encrips atau kompresi
 * Cara kerja Worker Treads mirip dengan Web Worker Web Api
 * https://nodejs.org/dist/latest-v16.x/docs/api/worker_threads.html
 */

import { threadId, Worker } from "worker_threads";
const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.addListener("message", (message) => {
	console.info(`tread-${threadId} receive message:${message}`);
})

worker2.addListener("message", (message) => {
	console.info(`tread-${threadId} receive message:${message}`);
})

worker1.postMessage(100);
worker2.postMessage(50);