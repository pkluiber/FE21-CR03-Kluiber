(function(starters, maincourse, desserts, beverages) {
    var priceone = (starters + maincourse + desserts + beverages);
    console.log(priceone);
}(4.50, 9.90, 13.90, 3.40));

(function(starters, maincourse, desserts, beverages) {
    var priceone = (starters + maincourse + desserts + beverages);
    console.log(priceone);
}(4.00, 7.90, 8.90, 5.90));


(function(starters, maincourse, desserts, beverages) {
    var pricetwo = 50 - (starters + maincourse + desserts + beverages);
    console.log(pricetwo);
}(13.90, 11.90, 6.90, 4.90));