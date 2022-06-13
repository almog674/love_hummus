/*
Name: hummus_api.js
Author: Hanich 08
Purpose: Api for communicating with the server.
*/

class HummusApi {
    // Api for communicating with the server.
    constructor(originUrl) {
        this.originUrl = originUrl
    }

    async getRequest(requestUrl, requestQuery) {
        // Sends a get request to the server
        // requestUrl: the user we want to send to
        // requestQuery: the query we want to send to the server
        let fullRequestPath = `${this.originUrl}\\${requestUrl}`
        result = await fetch(fullRequestPath, {
            query: requestQuery
        })
        return result
    }

    async postRequest(requestUrl, request_body) {
        // Send a post request to the server
        // requestUrl: the user we want to send to
        // request_body: the data we want to send to the server
        let fullRequestPath = `${this.originUrl}\\${requestUrl}`
        result = await fetch(fullRequestPath, {
            method: "POST",
            body: request_body
        })
        return result
    }

    async putRequest(requestUrl, request_body) {
        // Send a post request to the server
        // requestUrl: the user we want to send to
        // request_body: the data we want to send to the server
        let fullRequestPath = `${this.originUrl}\\${requestUrl}`
        result = await fetch(fullRequestPath, {
            method: "PUT",
            body: request_body
        })
        return result
    }

}