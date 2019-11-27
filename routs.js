const Todo = require("./models/Todos")
const {
    Router
} = require("express")
const router = Router()


router.get("/", async (req, res) => {
    const todos = await Todo.find({})
    const data = {
        title: "Main Page",
        todos
    }
    res.render("index", {
        data
    })
})


router.get("/create", (req, res) => {
    res.render("create", {
        title: "Create new Todo"
    })
})

router.post("/create", async (req, res) => {
    let todo = await new Todo({
        title: req.body.title
    })

    await todo.save()
    res.redirect("/")
})

router.post("/complete", async (req, res) => {

})
module.exports = router;