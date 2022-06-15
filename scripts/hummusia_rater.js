/*
Name: hummusia_rater.js
Author: Hanich 02
Purpose: Lets the user add humusia to the database.
*/



class HummusiaRater {
    constructor() {
        this.ratingNameInput = document.querySelector(".rating_name_input")
        this.ratingNumberInput = document.querySelector(".rating_number_input")
        console.log(this.ratingNameInput, this.ratingNumberInput)
        document.querySelector("#rate").addEventListener("click", this.rateHummusia)
    }


    rateHummusia = () => {
        console.log(this.ratingNameInput, this.ratingNumberInput)
        rateHummusiaRequest(this.ratingNameInput.value, this.ratingNumberInput.value)
    }
}


hummusia_searcher = new HummusiaRater()