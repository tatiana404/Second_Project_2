const router = require("express").Router()
const {Post} = require("../models")

router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({...req.body})
    res.json(newPost)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put("/post/:postId", (req, res) => {
  const post = getPost(req.params.postId)

  if (!post) return res.status(404)
})

router.delete("/:id", async (req, res) => {
  try {
    const existingPost = await Post.destroy({
      where: {
        id: req.body.id,
        user_id: req.session.user_id,
      },
    })

    if (!existingPost) {
      res.status(404).json({message: "No post to delete!"})
      return
    }
    res.status(200).json(projectData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
