import { getUsers, addUser, updateUser, deleteUser} from '../db.js'

async function GetUsers(req,res) {
    res.send (await getUsers())
}

async function AddUser(req,res) {
    const {email, nev} = req.body
  await addUser(nev, email)
  res.send('Megerkezett a valasz')
}
    

async function UpdateUser(req, res) {
    const {id}  = req.params
    const {nev, email} = req.body
    res.send(await updateUser(id, nev, email))
    
}

async function DeleteUser(req, res) {
    const {id} = req.params
  res.send( await deleteUser(id))
    
}

export const userController = {
    GetUsers, 
    AddUser, 
    UpdateUser, 
    DeleteUser
}