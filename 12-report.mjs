/**
 * Report merupakan  fitur yang terdapat di nodeJs untuk membuat laporan secara otomatis dalam file ketika sesuatu terjadi pada applikasi nodeJs Kita
 * https://nodejs.org/dist/latest-v16.x/docs/api/report.html
 */

import process from "process";

// setting
process.report.reportOnFatalError=true;
process.report.reportOnUncaughtException=true;
process.report.reportOnSignal =true;
process.report.filename="report.json";

function sampleError(){
    throw new Error("Ups!")
}
sampleError();