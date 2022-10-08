




 function HomeAPI() {
 const URL = 'https://31.220.53.103/api/accueils?populate=*';
  return  fetch(
    URL,
    {
      method:"GET",
      headers : {
        Accept:'Application/json',
      },
    }).then((res)=> res.json());
}

function GalleryAPI(){
    const URL = 'https://31.220.53.103/api/galleries?populate=*';
     return  fetch(
       URL,
       {
         method:"GET",
         headers : {
           Accept:'Application/json',
         },
       }).then((res)=> res.json());
}


function TarifAPI(){
  const URL = 'https://31.220.53.103/api/offres?populate=*';
   return  fetch(
     URL,
     {
       method:"GET",
       headers : {
         Accept:'Application/json',
       },
     }).then((res)=> res.json());
}





export default {
  HomeAPI,
  GalleryAPI,
  TarifAPI,
};