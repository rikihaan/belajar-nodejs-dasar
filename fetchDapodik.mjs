const token = "Z5v9kCm6krh5sEC"
const searchParam = new URLSearchParams();
searchParam.append("npsn","20200728");

const request = new Request(`http://localhost:5774/WebService/getPengguna?${searchParam}`,{
    method:"get",
    headers: {Authorization: `Bearer ${token}`}
})

const response = fetch(request);
response.then((result)=>result.json())
.then((json)=>console.info(json)).catch((error)=>{
    console.info(error.message);
})