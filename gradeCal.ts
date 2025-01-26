function calGrade(math: number, physic: number, chemistry: number) {
    var avg = (math+physic+chemistry)/3;

    return avg < 70 
        ? `C Grade (${avg})` 
        : avg < 90 
            ? `B Grade (${avg})` 
            : `A Grade (${avg})`;
}
// Prompt the professor to enter marks
var math = Number(prompt("Enter marks for Mathematics:") || "0");
var physics = Number(prompt("Enter marks for Physics:") || "0");
var chemistry = Number(prompt("Enter marks for Chemistry:") || "0");

console.log(calGrade(math, physics, chemistry));

