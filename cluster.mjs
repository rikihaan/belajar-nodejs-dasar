/**
 * Seperti dijelaskan di awal, bahwa NodeJs itu secara default dia berjalan singgle theread, kecuali jika kita membuat thread manual menggunakan worker thread, tapi itu tetap dalam satu proses
 * NodeJs memiliki standart library bernama Cluster, dimana kita bisa menjalankan  beberapa proses NodeJs Sekaligus
 * ini sangat cocok ketika kita menjalankan menggunkana CPU multi core, sehigga semua core bisa kita utilitas dengan baik, misal kita jalankan Proses NodeJS sejumlah CPU Core
 * 
 * Cluster Perimay dan Worker
 * didalam  Cluster, terdapat dua jenis aplikasi, primary dan worker
 * Primary biasanya digunakan sebagai koordinator atau manager untuk para worker
 * Sedankan Worker sendiri adalah aplikasi yang menjalankan tugas nya
 */

import cluster from 'cluster';
import process from 'process';
import http from 'http';
import os from 'os';


if(cluster.isPrimary){
    for (let i = 0; i <= os.cpus().length; i++) {
        // melakukan pembuatan fork atau new process sesuai dengan jumlah CPU core
        cluster.fork();

    }

    cluster.addListener("exit",(worker)=>{
        console.info(`Worker : ${worker.id} is exited`)
        cluster.fork()
    })
}

if(cluster.isWorker){
    const server = http.createServer((request,response)=>{
        response.write(`Response from request ${process.pid}`);
        response.end();
        process.exit();
    })

    server.listen(3000);
}



