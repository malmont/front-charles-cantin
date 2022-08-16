

export default function HomeAPI() {
 const URL = 'https://backend-charles-cantin.herokuapp.com/api/accueils?populate=*';
  return  fetch(
    URL,
    {
      method:"GET",
      headers : {
        Accept:'Application/json',
      },
    }).then((res)=> res.json());
  
  
}
