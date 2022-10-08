




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
    const URL = 'https://backend-strapi.online/api/galleries?populate=*';
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
  const URL = 'https://backend-strapi.online/api/offres?populate=*';
   return  fetch(
     URL,
     {
       method:"GET",
       headers : {
         Accept:'Application/json',
       },
     }).then((res)=> res.json());
}





// eslint-disable-next-line import/no-anonymous-default-export
export default {
  HomeAPI,
  GalleryAPI,
  TarifAPI,
};