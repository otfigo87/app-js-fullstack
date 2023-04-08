const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Here is the Data" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body.message });
});

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
