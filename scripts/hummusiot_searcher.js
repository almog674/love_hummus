/*
Name: hummus_api.js
Author: Hanich 08
Purpose: Helps you search hummusiot with the ui.
*/



class HummusiotSearcher {
    // Helps you search hummusiot with the ui.
    constructor() {
        this.fieldToFilterInput = document.querySelector("#filters")
        this.fieldToFIlterInput = document.querySelector("#filters_value")
        this.priceFilter = document.querySelector("#price")
        this.kosherFilter = document.querySelector("#kosher")
        this.minimumRateInput = document.querySelector("#min_rate_input")

        this.hummusapi = new HummusApi(ORIGIN_URL)
    }

    async searchHummusiot() {
        let filter = this.get_filter_from_ui()
        this.hummusapi.getRequest("/hummusiot", filter)
    }

    get_filter_from_ui() {
        let fieldterToFilter = this.fieldToFilter.value
        filter = `{
                {${fieldterToFilter}: ${this.fieldToFIlterInput.value}},
                {"price_class": ${this.priceFilter.value}},
                {"is_kosher": ${this.kosherFilter.value}},
                {"minimum_rate_filter": {$gte: ${this.minimumRateInput.value}}}
            }`
        return filter
    }
}