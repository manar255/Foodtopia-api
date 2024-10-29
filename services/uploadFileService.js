const stream = require('stream');
const cloudinary= require('../config/Cloudinary')

const uploadToCloudinary = (buffer,folder) => {
    return new Promise((resolve, reject) => {
        const bufferStream = new stream.PassThrough();
        bufferStream.end(buffer);

        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: folder },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );

        bufferStream.pipe(uploadStream);
    });
}
module.exports={
    uploadToCloudinary
}
