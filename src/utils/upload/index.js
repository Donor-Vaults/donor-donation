import config from "../../config";
import axios from "axios"

export const uploadFile = async (file) => {
    
    console.log("filelee",file)
    const formData = new FormData();
    formData.append('document', file)
    const upload = await axios({
        url:`${config.STORAGE_URL}/upload`,
        method:"post",
        data:formData
    })
    return upload.data.url
}