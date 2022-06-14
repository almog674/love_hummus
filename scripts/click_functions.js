/*
Name: click_functions.js
Author: Hanich 02
Purpose: Handling button presses
*/

<<<<<<< HEAD

Searcher = new HummusiotSearcher()
document.getElementById("search").onclick = Searcher.searchHummusiot();
=======
Searcher = new HummusiotSearcher()
document.getElementById("search").onclick = Searcher.get_filter_from_ui();
>>>>>>> 6bb25879bf93f04cb8274ed90784adb77855fe71

Rater = new HummusiaRater()
document.getElementById("rate").onclick = Rater.rateHummusia()

Adder = new HummusiaAdder()
document.getElementById("add").onclick = Rater.addHumusia()
