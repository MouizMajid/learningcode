import sanitizeHTML from "sanitize-html";

export function sanitizeData(dataObj){


    for(const [key,value] of Object.entries(dataObj)){
        if (typeof value === 'string'){
            dataObj[key] = sanitizeHTML(value, {'allowedTags': ['b'],allowedAttributes: {} })

        }
    }

    return dataObj
}