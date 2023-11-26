import dns from "dns";
// import dnsPromise from "dns/promises"
const dnsPromise = dns.promises;

/**
 * DNS Merupakan standart library yang bisa digunakan untuk bekerja dengan DNS (Domain Name Server)
 * Misalka ingin mengetahui Ip dari sebuah alamat web
 * https://nodejs.org/dist/latest-v16.x/docs/api/dns.html
 */

// megunakan callback
// dns.lookup("www.programmerzamannow.com",function callbackDns(error,ip,family){
//     console.info(error,ip,family);
// })

// menggunakan promise await
// const address = await dnsPromise.lookup("www.programmerzamannow.com")

// promise then
dnsPromise.lookup("www.programmerzamannow.com",{
    family:6,
    hints:dns.ADDRCONFIG | dns.V4MAPPED
})
.then((result)=>
    {
        console.info(result)
    }).catch((error)=>console.info(error))


