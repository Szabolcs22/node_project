import express from 'express'
//import {createUser, addUser,getUsers, deleteUser, updateUser } from './db.js'
//import {createCategories, addCategory, getCategories, deleteCategory, updateCategory} from './db.js'
//import { createCikkek, addCikk, getCikkek,deleteCikk ,deleteCikktabla} from './db.js'



//valtoztatas proba
import morgan from 'morgan'
import bodyParser from 'body-parser' 
import { userRouter } from './routes/user.js'
import { categoryRouter } from './routes/category.js'
import { articleRouter } from './routes/article.js'

//import categoryRouter

const app = express()

const port = 3000

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use('/users', userRouter)
app.use('/category', categoryRouter)
app.use('/articles', articleRouter)

//app.use

//GET

//app.get('/categories', async (req, res) => {
  
//  res.send(await getCategories())
//})
//app.get('/cikkek', async (req, res) => {
  
  //res.send(await getCikkek())
//})

//POST




//app.post('/ujcikk', async (req, res) => {
  //res.send(await addCikk())
//})

//PUT



//PATCH
//app.patch('/hello', (req, res) => {
  //res.send('Patch, ez az elso projekt')
//})

//DELETE


//app.delete('/deletecategories', async (req, res) => {
  
 // res.send(await deleteCategory())
//})
//app.delete('/deletecikk', async (req, res) => {
  
 // res.send(await deleteCikk())
//})

app.listen(port, () => {
  console.log(`A szerver fut a http:localhost:${port}cimen`)
  //createUser()
  //addUser()
  //getUsers()
  //addcategorie()
  //createCategories()
  //getCategories()
  //createCikkek()
  //delCikkek()
  //addCikk()
  //deleteCikk()
  //deleteCikktabla()
  //createCikkek()
})
