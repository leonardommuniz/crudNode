import express from "express";

const allRoutes = express.Router()

const allUsers = []

// Create
allRoutes.post('/user', (req, res) => {
    const { name } = req.body
    allUsers.push({ name:name, status:false })
    return res
            .status(201)
            .json({data: name, message: `Usuario ${name} adicionado com sucesso!`})
})
// List
allRoutes.get('/users', (req, res) => {
    return res
    .status(201)
    .json(allUsers)
})

export { allRoutes }