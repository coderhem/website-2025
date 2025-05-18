// Set today's date as the minimum allowed date
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date")
  const today = new Date().toISOString().split("T")[0]
  dateInput.setAttribute("min", today)
  const date2Input = document.getElementById("date2")
  date2Input.setAttribute("min", today)
})

function handleSubmit(event) {
  event.preventDefault() // Prevent form submission

  let valid = true

  // Date validation
  const dateInput = document.getElementById("date")
  const dateError = document.getElementById("dateError")
  const today = new Date().toISOString().split("T")[0]

  if (dateInput.value < today) {
    dateError.classList.remove("hidden")
    dateInput.classList.add("border-red-500")
    valid = false
  } else {
    dateError.classList.add("hidden")
    dateInput.classList.remove("border-red-500")
  }

  // Other validations can go here

  if (valid) {
    document.getElementById("formSuccess").classList.remove("hidden")
    // Add form submission logic here if needed
  } else {
    document.getElementById("formError").classList.remove("hidden")
  }

  return valid // Return true if form is valid, false otherwise
}
