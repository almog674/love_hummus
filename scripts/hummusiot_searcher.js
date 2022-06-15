/*
Name: hummus_api.js
Author: Hanich 08
Purpose: Helps you search hummusiot with the ui.
*/



class HummusiotSearcher {
    // Helps you search hummusiot with the ui.
    constructor() {
        this.HummusiotDisplayer = new HummusiotDisplayer()

        this.fieldToFilter = document.querySelector("#filters")
        this.fieldToFIlterInput = document.querySelector("#filters_value")
        this.priceFilter = document.querySelector("#price")
        this.kosherFilter = document.querySelector("#kosher")
        this.minimumRateInput = document.querySelector("#min_rate_input")
        document.querySelector("#search").addEventListener("click", this.searchHummusiot)
    }

    searchHummusiot = async () => {
        console.log("search")
        let filter = this.getFilterFromUi()
        let hummusiotFound = await searchHumusiot(filter)
        console.log(hummusiotFound)
        this.HummusiotDisplayer.displayHummusiot(hummusiotFound)
    }

    getFilterFromUi = () => {
        let fieldterToFilter = this.fieldToFilter.value
        // let filter = `{
        //         "${fieldterToFilter}": "${this.fieldToFIlterInput.value}",
        //         "price_class": "${this.priceFilter.value}",
        //         "is_kosher": "${this.kosherFilter.value}",
        //         "minimum_rate_filter": {$gte: ${this.minimumRateInput.value}}
        //     }`

        let filter = `{
            "${fieldterToFilter}": "${this.fieldToFIlterInput.value}",
            "price_class": "${this.priceFilter.value}",
            "is_kosher": "${this.kosherFilter.value}"
        }`
        return filter
    }
}

hummusia_searcher = new HummusiotSearcher()
