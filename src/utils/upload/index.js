import config from "../../config";
import s3Config from "../../config/s3.config.js";

import S3FileUpload from 'react-s3';


function generateGuid() {
    var result, i, j;
    result = '';
    for (j = 0; j < 32; j++) {
        if (j == 8 || j == 12 || j == 16 || j == 20)
            result = result + '-';
        i = Math.floor(Math.random() * 16).toString(16).toUpperCase();
        result = result + i;
    }
    return result;
}

function renameFile(originalFile, newName) {
    return new File([originalFile], newName, {
        type: originalFile.type,
        lastModified: originalFile.lastModified,
    });
}
export const uploadFile = async (file) => {


    const extention = file.name.substr(file.name.lastIndexOf('.') + 1);

    const config = {
        bucketName: "donor-media-storage",
        accessKeyId: 'AKIAQTCT43YXE5ACEJWA',
        secretAccessKey: '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',
        region: 'us-east-1',
        s3Url:"http://donor-images-storage.s3-website-us-east-1.amazonaws.com"
     
    }
    
    console.log("11dd[a[a[apapa1111111")
    

    
 
    const fileName = `${generateGuid()}.${extention}`
    const renamedFile = renameFile(file,fileName)
    const res = await S3FileUpload.uploadFile(renamedFile, config);
    console.log(res.location)

    return res.location
}