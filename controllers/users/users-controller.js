import * as dao from './users-dao.js'
import {findByCredentials, findByUsername} from "./users-dao.js";

let currentUser = null

const UsersController = (app) => {
    const createUser = async (req, res) => {
        const user = req.body
        const actualUser = await dao.createUser(user)
        res.json(actualUser)
    }
    const updateUser = async (req, res) => {
        const uid = req.params.uid
        const updates = req.body
        const status = await dao.updateUser(uid,  updates)
        res.json(status)
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
            console.log("login: username and password problem")
            res.sendStatus(403)
            return
        }
        currentUser = existingUser
        res.json(existingUser)
    }
    const profile = async (req, res) => {
        if (currentUser) {
            res.json(currentUser)
            return
        }
        res.sendStatus(403)
    }
    app.put('/users/:uid', updateUser)

    app.post('/users', createUser)
    app.post('/register', register)
    app.post('/login', login)
    app.post('/profile', profile)

}

export default UsersController