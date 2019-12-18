var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(dayslate) {
            return dayslate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return age < 12 ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log("this is private");
    }
})(Utility || (Utility = {}));
// Task 06.01
/// <reference path="utility-functions.ts" />
var maxBooks = Utility.maxBooksAllowed(15);
console.log(maxBooks);
var util = Utility.Fees;
var result = util.calculateLateFee(10);
console.log(result);
