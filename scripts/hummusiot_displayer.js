/*
Name: hummusApi.js
Author: Hanich 08
Purpose: Display the hummusiot in the ui.
*/

class HummusiotDisplayer {
    constructor() {
        this.hummusContainer = document.querySelector(".hummus_container_bottom")
    }

    checkIfOpen = (openingTime, closingTime) => {
        /*
            openingTime: The opening time of the hummus.
            closingTime: The closing time of the hummus
            return: icon determine if the restaraunt is closed or open.
        */
        let currentDate = new Date();

        if (currentDate.getTime() >= openingTime && currentDate.getTime() <= closingTime) {
            return "restaurant"
        } else {
            return "event_busy"
        }
    }

    getRatingHtml = (ratingSum, numberOfRatings) => {
        /*
            rating_sum: The sum of all the ratings of a hummusia
            number_of_ratings: The number of people who has rated this hummusia
            return: html represent the raing average in stars
        */
        let ratingAverage = ratingSum / numberOfRatings
        let starsHtml = ""
        while (ratingAverage > 1) {
            starsHtml += `
            <span class="hummusia_star_icon material-symbols-outlined">
            star
            </span>
            `
            ratingAverage--;
        }
        if (ratingAverage > 0.5) {
            starsHtml += `
            <span class="hummusia_star_icon material-symbols-outlined">
            star_half
            </span>
            `
        }
        return starsHtml
    }

    buildHummusiaInHtml = (hummusia) => {
        /*
        Builds the html which represent the hummusia object.
        hummusia: An object with the nedded data for hummusia
        */
        let hummusiaHtml = `
        <div class="hummusia_item">
            <h4 class="hummus_container_name">${hummusia['name']}</h4>
            <h4 class="hummus_container_city">${hummusia['city']}</h4>
            <span class="hummusia_icon hummus_container_open material-symbols-outlined">
                ${this.checkIfOpen(hummusia['openingTime'], hummusia['closingTime'])}
            </span>
            <span class="hummus_container_kosher hummusia_icon material-symbols-outlined">
                ${hummusia['is_kosher'] == 'true' ? "check_circle" : "cancel"}
            </span>
            <div class="hummus_container_rating">
                ${this.getRatingHtml(hummusia['rating_sum'], hummusia['number_of_ratings'])}
            </div>
        </div>
    `
        return hummusiaHtml
    }

    addHummusiaToUi = (hummusia) => {
        /*
        hummusia: A hummusia we want to diplay in the ui
        */
        let hummusiaHtml = this.buildHummusiaInHtml(hummusia)
        this.hummusContainer.insertAdjacentHTML("afterbegin", hummusiaHtml);
    }

    displayHummusiot = (hummusiotArray) => {
        /*
        Takes an array of hummusiot and display them to the user.
        hummusiotArray: an array of hummusiot object.
        */
        Array.prototype.forEach.call(hummusiotArray, hummusia => {
            this.addHummusiaToUi(hummusia)
        })
    }
}

