import axios from 'axios'

const domain = "https://talal-admin-dashboard.onrender.com";

export const getTestimonialPage = async()=>{
    try{
        const response = await axios.get(`${domain}/get-boxes`,{
            params : {
                main_type : "testimonial",
                sub_type : "testimonial"
            }
        });
        return response.data;
    }
    catch(err){
        alert(err.message);
    }
}
