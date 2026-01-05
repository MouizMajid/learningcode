
import fs from 'node:fs/promises'
import path from 'node:path';
import { getData } from "./getData.js";


export async function addNewSighting(parsedData){

    try{
        const dataPath = path.join('data', 'data.json')
        
        const dataArray = await getData()
        dataArray.push(parsedData)
        await fs.writeFile(dataPath, JSON.stringify(dataArray, null, 2), 'utf8')
    }catch (err){
        throw new Error("error occured in writing data" + err)
    }

}