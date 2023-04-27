const db = require("../models");
const Post = db.post;
const multer = require("multer");
var fs = require("fs");

const uploading = multer({
  storage: multer.memoryStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
      const name = slugify(file.originalname, { lower: true });
      cb(null, `${new Date().getTime()}-${name}`);
    },
  }),
});

exports.createpost = (req, res) => {
  uploading.single(req.files.myfile.name);
  let data = fs.createReadStream(req.files.myfile.path, "utf-8");
  console.log("read", data.path);
  const post = new Post({
    creater_id: req.fields.creater_id,
    created_time: req.fields.created_time,
    debate_topic: req.fields.debate_topic,
    debate_description: req.fields.debate_description,
    debate_creater_side: req.fields.debate_creater_side,
    debate_opposite_side: req.fields.debate_opposite_side,
    debate_publicity: req.fields.debate_publicity,
    media: data.path,
  });

  post.save((err, post) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (post) {
      res
        .status(200)
        .send({ message: `${req.fields.debate_topic} created successfully` });
    }
  });
};

exports.mypost = (req, res) => {
  console.log(req.fields.id);
  // res.status(200).send({message: 'getting'})
  // return
  Post.find({ creater_id: req.fields.id }).exec((err, post) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (!post) {
      return res.status(404).send({ message: "No posts found." });
    } else {
      res.status(200).send(post);
    }
  });
};
