/*
Name: hummus_api.js
Author: Hanich 08
Porpuse: Api for communicating with the server.
*/

class HummusApi {
    // Api for communicating with the server.
    constructor(origin_url) {
        this.origin_url = origin_url
    }

    async getRequest(request_url) {
        // Sends a get request to the server
        // request_url: the user we want to send to
        let full_request_path = `${this.origin_url}\\${request_url}`
        result = await fetch(full_request_path)
        return result
    }

    async postRequest(request_url, request_body) {
        // Send a post request to the server
        // request_url: the user we want to send to
        // request_body: the data we want to send to the server
        let full_request_path = `${this.origin_url}\\${request_url}`
        result = await fetch(full_request_path, {
            method: "POST",
            body: request_body
        })
        return result
    }

    async putRequest(request_url, request_body) {
        // Send a post request to the server
        // request_url: the user we want to send to
        // request_body: the data we want to send to the server
        let full_request_path = `${this.origin_url}\\${request_url}`
        result = await fetch(full_request_path, {
            method: "PUT",
            body: request_body
        })
        return result
    }

}