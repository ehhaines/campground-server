import * as dao from './users-dao.js'
import {findByCredentials, findByUsername} from "./users-dao.js";

let currentUser = null

const UsersController = (app) => {
    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }
    const register = async (req, res) => {
        const user = req.body
        const existingUser = await findByUsername(user.username)
        if (existingUser) {
            console.log("register: username exist")
            res.sendStatus(403)
            return
        }
        const actualUser = await dao.createUser(user)
        currentUser = actualUser
        res.json(actualUser)
    }
    const login = async (req, res) => {
        const credentials = req.body
        const existingUser = await findByCredentials(credentials.username, credentials.password)
        if (!existingUser) {
            res.sendStatus(403)
            return
        }
        currentUser = existingUser
        res.json(existingUser)
    }
    app.post('/users', createUser)
    app.post('/register', register)
    app.post('/login', login)

}

export default UsersController