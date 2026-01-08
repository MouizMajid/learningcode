// handleGet

import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { addNewSighting } from "../utils/addNewSighting.js"
import { sanitizeData } from "../utils/sanitizeData.js"
import { sightingEmitter } from "../events/sightingEvents.js"
import {stories } from "../data/stories.js"

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

}

export async function handleNews(req, res) {
  res.statusCode = 200

  res.setHeader("Content-Type", "text/event-stream")
  res.setHeader("Cache-Control", "no-cache")
  res.setHeader("Connection", "keep-alive")



  setInterval(() => {
    let randomIndex = Math.floor(Math.random() * stories.length)

    res.write(
      `data: ${JSON.stringify({
        event: 'news-update',
        story: stories[randomIndex]
      })}\n\n`
    )


  }, 3000)

}
