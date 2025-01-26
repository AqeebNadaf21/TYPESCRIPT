enum Gender {
    Male,
    Female
}



console.log(Gender.Male);
console.log(Gender[1]);

// weekends 
enum WeekEnds {
    Saturday = 6,
    Sunday = 7
}

console.log(WeekEnds[0]); // o/p undefined  

// By default 0 and 
// Here explicitly assign the value 6 

enum OrderStatus {
    Pending = 1,
    Processing = 2,
    Shipped = 3,
    Delivered = 4
}



