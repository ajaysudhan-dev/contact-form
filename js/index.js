const form = document.getElementById("form")

// Submit initaiated

form.addEventListener("submit", function (event) {
    event.preventDefault()

    // Data Fetched from form

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Data Fetched for error
    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const numberError = document.getElementById("number-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Data Fetched for success
    const successBox = document.getElementById("success-box")

    // Clear previous errors
    firstNameError.innerHTML = ""
    lastNameError.innerHTML = ""
    numberError.innerHTML = ""
    emailError.innerHTML = ""
    messageError.innerHTML = ""

    // Validating form


    if (firstName.trim() === "") {
        firstNameError.innerHTML = '<p class="font-bold pt-2">First Name field is empty</p>'
    }
    if (firstName.length > 20) {
        firstNameError.innerHTML = '<p class="font-bold pt-2">Enter valid First name</p>'
    }

    if (lastName.trim() === "") {
        lastNameError.innerHTML = '<p class="font-bold pt-2">Last Name field is empty</p>'
    }
    if (lastName.length > 20) {
        lastNameError.innerHTML = '<p class="font-bold pt-2">Enter valid Last name</p>'
    }

    if (number.trim() === "") {
        numberError.innerHTML = '<p class="font-bold pt-2">Phone Number field is empty</p>'
    }
    if (number.length !== 10) {
        numberError.innerHTML = '<p class="font-bold pt-2">Enter valid Phone Number</p>'
    }

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (email.trim() === "") {
        emailError.innerHTML = '<p class="font-bold pt-2">Email field is empty</p>'
    }
    if (!emailRegex.test(email)) {
        emailError.innerHTML = '<p class="font-bold pt-2">Enter valid Email</p>'
    }

    if (message.trim() === "") {
        messageError.innerHTML = '<p class="font-bold pt-2">Message field is empty</p>'
    }
    if (message.length < 10) {
        messageError.innerHTML = '<p class="font-bold pt-2">Message is too short</p>'
    }

    // Success 

    if (
    firstNameError.innerHTML === "" &&
    lastNameError.innerHTML === "" &&
    numberError.innerHTML === "" &&
    emailError.innerHTML === "" &&
    messageError.innerHTML === ""
) {

    successBox.classList.remove("hidden")

    successBox.innerHTML = `
        <p>Hi ${firstName}</p>
        <p>Form Submitted Successfully</p>
        
    `
}

})