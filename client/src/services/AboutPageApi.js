import axios from 'axios'

const domain = "https://talal-admin-dashboard.onrender.com";

export const getAboutPage = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "about",
                sub_type : "about"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
