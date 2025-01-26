function calGrade(math, physic, chemistry) {
    var avg = (math + physic + chemistry) / 3;
    return avg < 70
        ? "C Grade (".concat(avg, ")")
        : avg < 90
            ? "B Grade (".concat(avg, ")")
            : "A Grade (".concat(avg, ")");
}
// Prompt the professor to enter marks
var math = Number(prompt("Enter marks for Mathematics:") || "0");
var physics = Number(prompt("Enter marks for Physics:") || "0");
var chemistry = Number(prompt("Enter marks for Chemistry:") || "0");
console.log(calGrade(math, physics, chemistry));
