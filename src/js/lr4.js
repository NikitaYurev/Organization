// Exercise B:
// Function to calculate amount of days to the nearest 23 august
function calculateDaysToAugust23() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    // Create date for 23 august of current year
    let august23 = new Date(currentYear, 7, 23); // 7 - index of month (august)

    // If 23 august already gone in current year, translate him to next year
    if (currentDate > august23) {
        august23.setFullYear(currentYear + 1);
    }

    // Calculate difference in days between current date and 23rd august
    let differenceInMilliseconds = august23 - currentDate;
    let daysLeft = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return daysLeft;
}

let daysLeft = calculateDaysToAugust23();
document.getElementById("daysLeft").textContent = daysLeft; 