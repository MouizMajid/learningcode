

export async function parseJSONBody(req){
    
    let body = '';
    for await (const chunk of req){
        body+= chunk
    }

    try{
        const bodyObj = JSON.parse(body);
        console.log("parse success")
        return bodyObj
    }catch (err){
        throw new Error("invalid json format" + err)
    }

    

}