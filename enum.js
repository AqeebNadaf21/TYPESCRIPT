var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender[1]);
// weekends 
var WeekEnds;
(function (WeekEnds) {
    WeekEnds[WeekEnds["Saturday"] = 6] = "Saturday";
    WeekEnds[WeekEnds["Sunday"] = 7] = "Sunday";
})(WeekEnds || (WeekEnds = {}));
console.log(WeekEnds[0]); // o/p undefined  
// By deafult 0 and 
// Here explicitly assign the value 6 
var OrderSatus;
(function (OrderSatus) {
    OrderSatus[OrderSatus["Pending"] = 1] = "Pending";
    OrderSatus[OrderSatus["Processing"] = 2] = "Processing";
    OrderSatus[OrderSatus["Shipped"] = 3] = "Shipped";
    OrderSatus[OrderSatus["Deliverd"] = 4] = "Deliverd";
})(OrderSatus || (OrderSatus = {}));
