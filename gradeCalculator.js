
function calculateGrade(math, physic, chemistry) {
    var avg = (math + physic + chemistry) / 3;
    if (avg < 70) {
        return "C Grade {".concat(avg, ")");
    }
    else if (avg >= 70 && avg < 90) {
        return "B Grade (".concat(avg, ")");
    }
    else {
        return "A Grade (".concat(avg, ")");
    }
}
// Prompt the professor to enter marks
var math = Number(prompt("Enter marks for Mathematics:") || "0");
var physics = Number(prompt("Enter marks for Physics:") || "0");
var chemistry = Number(prompt("Enter marks for Chemistry:") || "0");
console.log(calculateGrade(math, physics, chemistry));

// ("=====================================================")

// // gradeCalculator.ts
// // Function to calculate the grade based on average
// function calculateGrade(average: number): string {
//     if (average < 70) {
//         return 'C grade';
//     } else if (average >= 70 && average < 90) {
//         return 'B grade';
//     } else {
//         return 'A grade';
//     }
// }
// // Main function to run the grade calculator
// function main() {
//     // Prompt the professor to enter marks
//     const mathMarks: number = parseFloat(prompt("Enter marks for Mathematics:") || "0");
//     const physicsMarks: number = parseFloat(prompt("Enter marks for Physics:") || "0");
//     const chemistryMarks: number = parseFloat(prompt("Enter marks for Chemistry:") || "0");
//     // Calculate the average
//     const average: number = (mathMarks + physicsMarks + chemistryMarks) / 3;
//     // Determine the grade
//     const grade: string = calculateGrade(average);
//     // Output the results
//     console.log(`Average: ${average.toFixed(2)}`);
//     console.log(`Grade: ${grade}`);
// }
// // Run the main function
// main();

