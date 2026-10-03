// Page navigation

function showPage(pageId, element) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.add("hidden");
    });

    // Show selected page
    document.getElementById(pageId).classList.remove("hidden");

    // Remove active class
    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(function(item) {
        item.classList.remove("active");
    });

    // Add active class
    element.classList.add("active");
}


// Open patient modal

function openModal() {
    document.getElementById("patientModal").style.display = "block";
}


// Close patient modal

function closeModal() {
    document.getElementById("patientModal").style.display = "none";
}


// Add patient

function addPatient(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const phone = document.getElementById("phone").value;
    const department = document.getElementById("department").value;

    const table = document.getElementById("patientList");

    const row = table.insertRow();

    const patientId = "P" + String(table.rows.length).padStart(3, "0");

    row.innerHTML = `
        <td>${patientId}</td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${gender}</td>
        <td>${phone}</td>
        <td>${department}</td>
    `;

    // Update dashboard patient count
    const countElement = document.getElementById("patientCount");

    let count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;

    // Clear form
    document.querySelector("form").reset();

    // Close modal
    closeModal();

    alert("Patient added successfully!");
}


// Search patients

function searchPatients() {

    const input = document
        .getElementById("patientSearch")
        .value
        .toLowerCase();

    const rows = document
        .getElementById("patientList")
        .getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {

        const text = rows[i].innerText.toLowerCase();

        if (text.includes(input)) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}


// Book appointment

function bookAppointment() {

    const patient = prompt("Enter patient name:");

    if (!patient) {
        return;
    }

    const doctor = prompt("Enter doctor name:");

    if (!doctor) {
        return;
    }

    const date = prompt("Enter appointment date:");

    if (!date) {
        return;
    }

    alert(
        "Appointment booked successfully!\n\n" +
        "Patient: " + patient +
        "\nDoctor: " + doctor +
        "\nDate: " + date
    );
}


// Close modal when clicking outside

window.onclick = function(event) {

    const modal = document.getElementById("patientModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};