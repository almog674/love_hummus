/*
Name: hummus_api.js
Author: Hanich 08
Purpose: Display the hummusiot in the ui.
*/

class HummusiotDisplayer {
    constructor() {
        this.hummus_container = document.querySelector(".hummus_container_bottom")
    }

    check_if_open(opening_time, closing_time) {
        /*
            opening_time: The opening time of the hummus.
            closing_time: The closing time of the hummus
            return: icon determine if the restaraunt is closed or open.
        */
        let current_date = new Date();

        if (current_date.getTime() >= opening_time && current_date.getTime() <= closing_time) {
            return "restaurant"
        } else {
            return "event_busy"
        }
    }

    get_rating_html(rating_sum, number_of_ratings) {
        /*
            rating_sum: The sum of all the ratings of a hummusia
            number_of_ratings: The number of people who has rated this hummusia
            return: html represent the raing average in stars
        */
        let rating_average = rating_sum / number_of_ratings
        let stars_html = ""
        while (rating_average > 1) {
            stars_html += `
            <span class="hummusia_star_icon material-symbols-outlined">
            star
            </span>
            `
            rating_average--;
        }
        if (rating_average > 0.5) {
            stars_html += `
            <span class="hummusia_star_icon material-symbols-outlined">
            star_half
            </span>
            `
        }
        return stars_html
    }

    build_hummusia_in_html(hummusia) {
        hummusia_html = `
            < div class="hummusia_item" >
        <h4 class="hummus_container_name">${hummusia['name']}</h4>
        <h4 class="hummus_container_city">${hummusia['city']}</h4>
        <span class="hummusia_icon hummus_container_open material-symbols-outlined">
            ${this.check_if_open(hummusia['opening_time'], hummusia['closing_time'])}
        </span>
        <span class="hummus_container_kosher hummusia_icon material-symbols-outlined">
            ${hummusia['kosher'] ? "check_circle" : "cancel"}
        </span>
        <div class="hummus_container_rating">
            ${this.get_rating_html(hummusia['rating_sum'], hummusia['number_of_ratings'])}
        </div>
    </div >
    `
    }

    add_hummusia_to_ui(hummusia) {
        hummusia_html = build_hummusia_in_html(hummusia)
        this.hummus_container.insertAdjacentHTML("afterbegin", hummusia_html);
    }
}

