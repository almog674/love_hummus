/*
Name: hummusia_rater.js
Author: Hanich 02
Purpose: Lets the user add humusia to the database.
*/



class HummusiaRater {
    constructor() {
        this.ratingNameInput = document.querySelector("#rating_name_input")
        this.ratingNumberInput = document.querySelector("#rating_number_input")
        document.querySelector("#rate").addEventListener("click", this.rateHummusia)
    }


    rateHummusia() {
    rateHummusiaRequest(this.ratingNameInput.value, this.ratingNumberInput.value)
    console.log("rate")
    }
}