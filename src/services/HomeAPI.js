




 function HomeAPI() {
 const URL = 'https://backend-strapi.online/api/accueils?populate=*';
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





export default {
  HomeAPI,
  GalleryAPI,
  TarifAPI,
};