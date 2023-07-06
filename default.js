
import { data } from "./constant/data.js";
import news from './model/news-schema.js'
const DefaultData = async()  => {
    try{
        await news.deleteMany({});
       await news.insertMany(data);
       console.log("data imported sucesufully"); 
    }catch(error){
        console.log('Error',error.message);
    }
}

export default DefaultData;  