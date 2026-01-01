
// serveStatic.js
import path from 'node:path'
import fs from 'node:fs/promises'
import {sendResponse} from './sendResponse.js'
import { getContentType } from './getContentType.js';

export async function serveStatic(req, res, dir){

    const publicPath = path.join(dir, 'public')

    const filePath = path.join(publicPath,
        (req.url==='/' ? 'index.html': req.url)
     );
    const ext = path.extname(filePath)
    const ct = getContentType(ext);
    try{
        const content = await fs.readFile(filePath);
        sendResponse(content, res, 200, ct)
    }catch(err){

        if(err.code === "ENOENT"){
            const content = await fs.readFile(path.join(publicPath, '404.html'));
            sendResponse(content, res, 404, 'text/html')
        }else{  
            sendResponse("<h1>Other error</h1>", res, 500, 'text/html')
        }

    }


}