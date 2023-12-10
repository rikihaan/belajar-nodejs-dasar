import http from 'http';
const key ='Z5v9kCm6krh5sEC';

const request = http.request('http://localhost:5774/WebService/getGtk?npsn=20200728',{
    method:"GET",
    headers: {Authorization: `Bearer ${key}`}
    
},function(callback){
    callback.addListener("data",function(response){
        console.info(response.toString())
    })
})
const body = JSON.stringify({
    username:"Asep",
    lastname:"Riki"
})
request.write(body)
request.end();



