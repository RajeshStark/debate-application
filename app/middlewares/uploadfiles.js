const db = require("../models");
const Post = db.post;
const multer  = require('multer')
const uploading = multer({ dest: '../public/postuploads' })


uploadfiles = (req, res, next) => {
  console.log("check", req.formdata);
  // Username
 uploading.single('uploaded_file')
 res.send({message: 'here'})
next()
};



const upload = {
    uploadfiles
};

module.exports = upload;
