/*
Name: hummusia_rater.js
Author: Hanich 08
Purpose: Lets the user add humusia to the database.
*/



class HummusiaRater {
    constructor() {
        this.ratingNameInput = document.querySelector("#rating_name_input")
        this.ratingNumberInput = document.querySelector("#rating_number_input")
        document.querySelector("#rate").addEventListener("click", this.rateHummusia)
    }

    constractRatingRequest() {

    }

    rateHummusia() {
        console.log("rate")
    }
}