/*
Name: hummusia_adder.js
Author: Hanich 08
Purpose: Lets the user add humusia to the database.
*/

class HummusiaAdder {
    constructor() {
        this.nameInput = document.querySelector("#add_humusia_name_input")
        this.cityInput = document.querySelector("#add_humusia_city_input")
        this.kosherInput = document.querySelector("#add_humusia_kosher_input")
        this.openInput = document.querySelector("#add_humusia_open_input")
        this.closeInput = document.querySelector("#add_humusia_close_input")
        document.querySelector("#add").addEventListener("click", this.addHumusia)
    }

    constructHumusiaObject = () => {
        let hummusiaObject = {
            name: this.nameInput.value,
            city: this.cityInput.value,
            is_kosher: this.kosherInput.value,
            open_time: this.openInput.value,
            close_time: this.closeInput.value,
            close: this.closeInput.value
        }
        return hummusiaObject
    }

    addHumusia = async () => {
        console.log("add")
        let hummusiaObject = this.constructHumusiaObject()
        let response = await addHummusiaRequest(hummusiaObject)
        alert(response)
    }
}


hummusia_adder = new HummusiaAdder()

