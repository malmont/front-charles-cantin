

 function HomeAPI() {
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

function GalleryAPI(){
    const URL = 'https://backend-charles-cantin.herokuapp.com/api/galleries?populate=*';
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
  GalleryAPI
};