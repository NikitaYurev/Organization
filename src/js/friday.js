// Exercise A)
function calculateDays() {
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    var currentMonth = currentDate.getMonth();
    var currentYear = currentDate.getFullYear();

    // We seek the nearest 13th date
    var thirteenthDate = new Date(currentYear, currentMonth, 13);

    // We seek the day of the week for 13th date
    var thirteenthDayOfWeek = thirteenthDate.getDay();

    // We seek the difference of days to next friday
    var daysUntilNextFriday = 5 - thirteenthDayOfWeek;

    // if today is friday or later, we add 7 days.
    if (daysUntilNextFriday <= 0) {
        daysUntilNextFriday += 7;
    }

    document.getElementById("result").value = daysUntilNextFriday;
}

function cancel() {
    document.getElementById("result").value = "";
}