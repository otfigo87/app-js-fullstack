const express = require("express");
const { setPosts } = require("../controllers/post.controller");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Here is the Data" });
});

router.post("/", setPosts);

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id })
})

router.delete("/:id", (req, res) => {
  res.json({message: `Post Deleted Id: ${req.params.id}`})
})

router.patch("/like-post/:id", (req, res) => {
  res.json({message: `Post liked: ${req.params.id}`})
})

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: `Post disliked: ${req.params.id}` });
});

module.exports = router;
