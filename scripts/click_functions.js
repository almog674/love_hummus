/*
Name: click_functions.js
Author: Hanich 02
Purpose: Handling button presses
*/

Searcher = new HummusiotSearcher()
document.getElementById("search").onclick = Searcher.get_filter_from_ui();

Rater = new HummusiaRater()
document.getElementById("rate").onclick = Rater.rateHummusia()

Adder = new HummusiaAdder()
document.getElementById("add").onclick = Rater.addHumusia()
