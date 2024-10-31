import pg from 'pg'

const { Client } = pg

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'styxa2',
  password: '123qwe',
  port: 5432
})

await client.connect()

//USER
export function createUser(){
client.query(`
    CREATE TABLE IF NOT EXISTS felhasznalok (
            id INT GENERATED ALWAYS AS IDENTITY,
            nev VARCHAR(100) NOT NULL,
            email VARCHAR(100),
            datum TIMESTAMP,
            PRIMARY KEY (ID)) 
            `)
}
export async function addUser(nev, email){
    await client.query(`
        INSERT INTO felhasznalok (id, nev, email, datum)
        VALUES (default, '${nev}' , '${email}' , NOW()) 
        `)
}
export async function getUsers(){
    const users = await client.query(` SELECT * FROM felhasznalok `)
        return users.rows
}
export async function updateUser(id, nev, email) {
   const user = await client.query(`
        UPDATE felhasznalok
        SET nev = '${nev}' , email = '${email}'
        WHERE id= ${id}
        `)    
        return user.rows
}
export async function deleteUser(id) {
    const users = await client.query(`
        DELETE FROM felhasznalok
        WHERE id= ${id}
        `)    
        return users.rows
}

//CATEGORIES
export function createCategories() {
    client.query(`
        CREATE TABLE IF NOT EXISTS kategoriak (
            kategoriaid INT GENERATED ALWAYS AS IDENTITY,
            kategorianev VARCHAR(100) NOT NULL,
        PRIMARY KEY (kategoriaID)
     ) `)
}
export async function addCategory(kategorianev){
        await client.query(`
        INSERT INTO kategoriak (kategoriaid, kategorianev)
        VALUES (default, '${kategorianev}') 
        `)

}
export async function getCategories(){
    const category = await client.query(` SELECT * FROM kategoriak `)
        return category.rows
}
export async function deleteCategory(kategoriaid){
    const category = await client.query(`
        DELETE FROM kategoriak
        WHERE kategoriaid= '${kategoriaid}'
        `)    
        return category.rows
        
}
export async function updateCategory(kategoriaid,kategorianev) {
    const category = await client.query(`
         UPDATE kategoriak
         SET kategorianev = '${kategorianev}' 
         WHERE kategoriaid= '${kategoriaid}'
         `)    
         return category.rows
 }
//CIKKEK
export function createCikkek(){
    client.query(`
        CREATE TABLE IF NOT EXISTS cikkek (
        cikkID INT GENERATED ALWAYS AS IDENTITY,
	    cikkCim VARCHAR(40),
	    cikkDatum TIMESTAMP,
	    szerzoID INT,
	    szoveg VARCHAR(255),
	    kategoriaID INT,
	
    PRIMARY KEY (cikkID),
    CONSTRAINT fk_szerzoID FOREIGN KEY (szerzoID) REFERENCES felhasznalok (id)
    )`)
}
export async function addCikk(cikkCim, szerzoID, szoveg){
    client.query(`
        INSERT INTO cikkek( cikkID, cikkCim, cikkDatum, szerzoID, szoveg)
        VALUES (DEFAULT, '${cikkCim}', NOW(), ${szerzoID}, '${szoveg}')`)

}
export async function getCikkek(){
    const cikkek = await client.query(` SELECT * FROM cikkek `)
        return cikkek.rows
}

export async function updateCikkek(cikkCim, cikkID){
    return await client.query(`
        UPDATE cikkek
        SET cikkCim='${cikkCim}'
        WHERE cikkID=${cikkID}
        `)
    return cikkek.rows
}


export async function deleteCikk(cikkID) {
    const cikkek = await client.query(`
      DELETE FROM cikkek
      WHERE cikkID = ${cikkID}
    `)
    return cikkek.rows
  }

export async function deleteCikktabla(){
    client.query(`
        DROP TABLE cikkek
        `)
}
//kategoriak select , insert, update, delete