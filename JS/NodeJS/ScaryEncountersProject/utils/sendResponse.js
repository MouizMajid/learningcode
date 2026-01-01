

export function sendResponse(data, res, sCode, cType){
    
    res.statusCode = sCode
    res.setHeader('Content-Type', cType)
    res.end(data)
}