const multer = require('multer');
const fs = require('fs')
// Multer Configuration
const storage = multer.memoryStorage()


const upload = multer({
    storage: storage
});

module.exports = upload; 