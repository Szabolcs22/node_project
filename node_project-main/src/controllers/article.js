import { getCikkek, addCikk, updateCikkek, deleteCikk } from "../db.js"
import Joi from "joi"

const addRule= Joi.object({
    cikkCim: Joi.string().required().min(3),
    szoveg: Joi.string().required().min(5).max(100),
    szerzoID: Joi.number().required()
})
const updateRule= Joi.object({
    cikkCim: Joi.string().required().min(3),
    cikkID: Joi.number().required()
})

async function GetArticle(req, res) {
    res.send( await getCikkek())
 }


 async function AddArticle(req,res) {
   try{
    const {cikkCim, szerzoID, szoveg} = await addRule.validateAsync(req.body)
    await addCikk(cikkCim, szerzoID, szoveg)
  res.send('Letrehoztam a cikket')
} catch (error){
    res.status(400).send(error)
}}

    
async function UpdateArticle(req,res) {
    try{
    const {cikkCim} = await addRule.validateAsync( req.body)
    const {cikkID} = req.params
    await updateCikkek(cikkCim, cikkID)
  res.send('Frissitettem a cikket')
}
catch(error){
    res.status(400).send(error)

}}


async function DeleteArticle(req,res) {
    const {cikkID} = req.params
  await deleteCikk(cikkID)
  res.send('Kitoroltem a cikket')
}


export const articleController = {
    GetArticle, 
    AddArticle, 
    UpdateArticle, 
    DeleteArticle
}