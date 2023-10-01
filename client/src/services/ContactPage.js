import axios from 'axios'

const domain = "https://talal-admin-dashboard.onrender.com";

export const sendMessage = async(payload)=>{
    try{
        const response = await axios.post(`${domain}/add-user`,payload);
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
