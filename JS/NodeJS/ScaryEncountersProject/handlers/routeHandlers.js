// handleGet

import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { addNewSighting } from "../utils/addNewSighting.js"
import { sanitizeData } from "../utils/sanitizeData.js"
import { sightingEmitter } from "../events/sightingEvents.js"
import { createAlert } from "../utils/createAlert.js"

export async function handleGet(res){
    const arr = await getData()
    const sData = JSON.stringify(arr)
    sendResponse(sData, res, 200, 'application/json' )

}

// handlePost

export async function handlePost(req, res) {
    try{
        const parsedBody = await parseJSONBody(req)
        const cleanData = sanitizeData(parsedBody)
        await addNewSighting(cleanData)
        sightingEmitter.emit('sighting-added', cleanData)
        sendResponse(JSON.stringify(cleanData), res, 201, 'application/json')

    } catch(err){
        sendResponse(JSON.stringify({error: err}), res, 400, 'application/json')
    }

/*
Challenge 2:
  1. Create a const 'rawBody' to store whatever is returned by parseJSONBody()
  2. For now, log 'rawBody'.
  3. Input an entry on the front end to test.
*/

}