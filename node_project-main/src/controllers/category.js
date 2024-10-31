// get, add, update, delete
import { getCategories, addCategory, updateCategory, deleteCategory} from '../db.js'

async function GetCategories(req,res) {
    res.send (await getCategories())
}

async function AddCategory(req,res) {
    const {kategorianev} = req.body
  await addCategory(kategorianev)
  res.send('Megerkezett a valasz')
}
    

async function UpdateCategory(req, res) {
    const {kategoriaid}  = req.params
    const {kategorianev} = req.body
    res.send(await updateCategory(kategoriaid, kategorianev))
    
}

async function DeleteCategory(req, res) {
    const {kategoriaid} = req.params
  res.send( await deleteCategory(kategoriaid))
    
}


export const categoryController = {
    GetCategories, 
    AddCategory, 
    UpdateCategory, 
    DeleteCategory
}