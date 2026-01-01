import path from 'node:path'
import fs from 'node:fs/promises'


export async function getData() {

    try {
        const dataPath = path.join('data', 'data.json')

        const data = await fs.readFile(dataPath, 'utf-8')
        const jsonData = JSON.parse(data);
        return jsonData
    }
    catch (err){
        console.log("error" +err.code)
        return [];
    }

/*
Challenge:
1. getData() should: 
    - read the json in json.data as a string 
    - parse it to JS 
    - return the parsed data. 

   If there’s an error, it should return an empty array (think, why are we doing this?).

hint.md for help
*/

}