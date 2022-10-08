import HomeAPI from "../../services/HomeAPI";
import {v4 as uuidv4} from 'uuid';

   
    var dataGallery=[];
    const URLImage="https://backend-strapi.online";
  async function arrayLoadingFunction(paramGallery) {

    if (paramGallery==="Bébé"){
  
      const data = await HomeAPI.GalleryAPI();
      return data.data[0].attributes.Baby.data;
    }
    if (paramGallery==="Famille"){
      const data = await HomeAPI.GalleryAPI();
      return data.data[0].attributes.Famille.data;
    }
    if (paramGallery==="Grossesse"){
      const data = await HomeAPI.GalleryAPI();
      return data.data[0].attributes.Grossesse.data;
    }
    if (paramGallery==="Mariage"){
      const data = await HomeAPI.GalleryAPI();
      return data.data[0].attributes.Mariage.data;
    }
    if (paramGallery==="Couple"){
      const data = await HomeAPI.GalleryAPI();
      return data.data[0].attributes.Couple.data;
    }
  
   
  }
  
    async function fetchGallery(categorie) {
      dataGallery=[];
     const arrayLoading = await arrayLoadingFunction(categorie);
      arrayLoading.map((item) => {
        
      
         dataGallery.push({
          id: uuidv4(),
          lien: URLImage + item.attributes.url,
          categorie: categorie
        });
  
      });
      return dataGallery;
      
    }

  
  
    
    export default {
        fetchGallery, 

    }

