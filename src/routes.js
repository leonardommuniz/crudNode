const express = resquire('express')

const allRoutes = express.Router()

const allUsers = []

// Create
allRoutes.post('/user', (req, res) => {
    const { name } = req.body
    allUsers.push({ name:name, status:false })
    return res
            .status(201)
            .Json(name)
            .send(`Usuario ${name} adicionado com sucesso!`)
})
// Reade
allRoutes.get('/users', (req, res) => {
    return res
    .status(201)
    .Json(allUsers)
})

export default allRoutes