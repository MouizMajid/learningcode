// handleGet

import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
export async function handleGet(res){
    const arr = await getData()
    const sData = JSON.stringify(arr)
    sendResponse(sData, res, 200, 'application/json' )

}