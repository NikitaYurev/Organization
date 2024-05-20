const dateNowElement = document.getElementById("dateNow");
const boxElement = document.querySelector(".floating-window");

function currentDate() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const dateNow = `${String(currentDay)}.${String(currentMonth)}.${String(currentYear)}`;

    return dateNow;
}

function currentDateFull() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const dateNow = `${String(currentDay)}.${String(currentMonth)}.${String(currentYear)} ${String(currentHours)}:${String(currentMinutes)}:${String(currentSeconds)}`;

    return dateNow;
}

function updateTime() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const dateNow = `${String(currentDay)}.${String(currentMonth)}.${String(currentYear)} ${String(currentHours)}:${String(currentMinutes)}:${String(currentSeconds)}`;

    dateNowElement.textContent = dateNow;
}

// Function to set currentDateFull
function setDateFull() {
    const dateNowFull = currentDateFull();
    dateNowElement.textContent = dateNowFull;
}

// Function to set currentDate
function setDateShort() {
    const dateNowShort = currentDate();
    dateNowElement.textContent = dateNowShort;
}

// Add event listener for mouse enter
boxElement.addEventListener("mouseenter", function () {
    setDateFull(); // Set full date when mouse enters
    updateTime(); // Update time immediately when mouse enters

    // Start updating time every second
    let intervalId = setInterval(updateTime, 1000);

    // Clear the interval when mouse leaves the box
    boxElement.addEventListener("mouseleave", function onMouseLeave() {
        clearInterval(intervalId);
        setDateShort(); // Reset the time to short when mouse leaves the box
        // Remove the event listener after it's used once
        boxElement.removeEventListener("mouseleave", onMouseLeave);
    });
});

window.onload = function () {
    setDateShort();
};