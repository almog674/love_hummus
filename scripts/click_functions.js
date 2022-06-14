/*
Name: click_functions.js
Author: Hanich 02
Purpose: Handling button presses
*/
import HummusiotSearcher from "./hummusiot_searcher.js"
import HummusiaRater from "./hummusiot_rater.js"
import HummusiaAdder from "./hummusiot_adder.js"


Searcher = HummusiotSearcher()
document.getElementById("search").onclick = Searcher.get_filter_from_ui();

Rater = HummusiaRater()
document.getElementById("rate").onclick = Rater.rateHummusia()

Adder = HummusiaAdder()
document.getElementById("add").onclick = Rater.addHumusia()
