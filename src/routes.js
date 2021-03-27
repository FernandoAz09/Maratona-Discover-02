const express = require("express")
const routes = express.Router()

// Config para o EJS enxergar o views dentro da src
const views = __dirname + "/views/"

const profile = {
    name: "Fernando",
    avatar: "https://avatars.githubusercontent.com/u/56461093?v=4",
    "monthly-budget": 3000,
    "hours-per-day": 5, 
    "days-per-week": 5,
    "vacation-per-year": 4
}

// request(req) // response(res) // Arrow Function(=>) 
routes.get('/', (req,res) => res.render(views + "index"))
routes.get('/job', (req,res) => res.render(views + "job"))
routes.get('/job/edit', (req,res) => res.render(views + "job-edit"))
routes.get('/profile', (req,res) => res.render(views + "profile", { profile }))



module.exports = routes