/*
Name: hummus_api.js
Author: Hanich 08
Purpose: Api for communicating with the server.
*/

const searchHumusiot = async (searchFilter) => {
    // Send a request to search a humusia in the server.
    // searchFilter: A string represent a filter in mongo db, sent in the param of the request.
    // Return: All the hummusiot which stand in the filter criteria.
    let fullRequestPath = `${ORIGIN_URL}\\${SEARCH_HUMUSIOT_URL}`

    result = await fetch(fullRequestPath, {
        param: { filter: searchFilter },
        origin: ORIGIN_URL
    })

    return result
}

const addHummusiaRequest = async (HummusiaObject) => {
    // Send a request to add new humusia to the server
    // HummusiaObject: The json of a hummusia
    // Return: status code alogn with message from the client.
    let fullRequestPath = `${ORIGIN_URL}\\${ADD_HUMMUSIOT_URL}`
    console.log(HummusiaObject)

    result = await fetch(fullRequestPath, {
        method: "POST",
        body: HummusiaObject,
        origin: ORIGIN_URL
    })

    return result
}

const rateHummusiaRequest = async (hummusia_name, rating) => {
    // Send a request for rating a specific hummusia to the server
    // hummusia_name: The name of the hummusia we want to rate.
    // rating: The rate we give the hummusia.
    let hummusia_id = searchHumusiot({ "name": hummusia_name })
    let fullRequestPath = `${ORIGIN_URL}\\hummusiot\\${hummusia_id}\\${rating}`

    result = await fetch(fullRequestPath, {
        method: "PUT",
        origin: ORIGIN_URL
    })

    return result
}