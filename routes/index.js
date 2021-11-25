const express = require('express')

const router = express.Router()

const homeRouter = require('./home')
const mainRouter = require('./mainRouter')

const routers = [
    {
        prefix: '/',
        router: homeRouter
    },
    {
        prefix: '/app',
        router: mainRouter
    }
]

routers.forEach((e) => {
    router.use(e.prefix, e.router)
})

module.exports = router
