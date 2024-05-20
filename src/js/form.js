function success(form) {
    let name = form.elements["name"].value.trim();
    let lastName = form.elements["lastName"].value.trim();
    let email = form.elements["email"].value.trim();
    let phone = form.elements["phone"].value.trim();
    let zip = form.elements["zip"].value.trim();
    let address = form.elements["address"].value.trim();
    let date = form.elements["date"].value.trim();
    let messageType = form.elements["messageType"].value;

    let nameRegex = /^[A-Za-z\s]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phoneRegex = /^\d{10}$/;
    let zipRegex = /^\d{5}$/;

    if (!nameRegex.test(name)) {
        alert("Please enter a valid name.");
        return false;
    }

    if (!nameRegex.test(lastName)) {
        alert("Please enter a valid last name.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number (10 digits).");
        return false;
    }

    if (!zipRegex.test(zip)) {
        alert("Please enter a valid zip code (5 digits).");
        return false;
    }

    // If all fields are correct, redirect to index.html
    alert("Your request was sent successfully! \n\
    redirecting to the main page...");
    window.location.href = "index.html";
    return false; // Prevent form submission (since we're redirecting manually)
}
