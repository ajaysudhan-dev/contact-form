let form = document.getElementById("form")

form.addEventListener("submit", function(event){

    event.preventDefault()

    let firstName = document.getElementById("first-name").value

    console.log(firstName)

})