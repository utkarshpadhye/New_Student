document
  .getElementById("register-form")
  .addEventListener("Submit", function (event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById("fname").value.trim(),
      lastName: document.getElementById("lname").value.trim(),
      email: document.getElementById("email").value.trim(),
      mnumber: document.getElementById("mnumber").value.trim(),
      dob: document.getElementById("dob").value.trim(),
      gender: document.getElementById("gender").value.trim(),
      year: document.getElementById("year").value.trim(),
      saddr: document.getElementById("saddr").value.trim(),
      city: document.getElementById("city").value.trim(),
      state: document.getElementById("state").value.trim(),
      pin: document.getElementById("pin").value.trim(),
      ssc: document.getElementById("ssc").value.trim(),
      hsc: document.getElementById("hsc").value.trim(),
      fy: document.getElementById("fy").value.trim(),
    };

    console.log("Form Data:", formData);

    for (const key in formData) {
      if (formData[key] === "" || formData[key] === null) {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate mobile number (example: 10-digit number)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(formData.mnumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validate date of birth (example: YYYY-MM-DD format)
    const dobPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!dobPattern.test(formData.dob)) {
      alert("Please enter a valid date of birth in YYYY-MM-DD format.");
      return;
    }

    // Validate gender
    const validGenders = ["Male", "Female", "Other"];
    if (!validGenders.includes(formData.gender)) {
      alert("Please select a valid gender.");
      return;
    }

    // Validate year (example: should be a 4-digit number)
    const yearPattern = /^\d{4}$/;
    if (!yearPattern.test(formData.year)) {
      alert("Please enter a valid year.");
      return;
    }

    // Validate pin (example: 6-digit number)
    const pinPattern = /^[0-9]{6}$/;
    if (!pinPattern.test(formData.pin)) {
      alert("Please enter a valid 6-digit pin.");
      return;
    }

    // Check for any other null fields
    for (const key in formData) {
      if (formData[key] === "") {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    console.log("Validation passed");

    // Get stored data from localStorage or initialize as an empty array
    let storedData = JSON.parse(localStorage.getItem("formData")) || [];

    // Add new form data to the stored data
    storedData.push(formData);

    // Save updated data back to localStorage
    localStorage.setItem("formData", JSON.stringify(storedData));

    console.log("Data saved");

    // Clear form fields
    document.getElementById("register-form").reset();

    alert("Form Submitted Successfully!");
  });

alert("Form Submitted Successfully!");
/*
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      firstName: document.getElementById("fname").value,
      lastName: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      mnumber: document.getElementById("mnumber").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      year: document.getElementById("year").value,
      saddr: document.getElementById("saddr").value,
      city: document.getElementById("city").value,
      state: document.getElementById("state").value,
      pin: document.getElementById("pin").value,
      ssc: document.getElementById("ssc").value,
      hsc: document.getElementById("hsc").value,
      fy: document.getElementById("fy").value,
    };

    let storedData = JSON.parse(localStorage.getItem("formData")) || [];

    if (!storedData) {
      storedData = [];
    }

    storedData.push(formData);

    localStorage.setItem("formData", JSON.stringify(storedData));

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mnumber").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("year").value = "";
    document.getElementById("saddr").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "";
    document.getElementById("pin").value = "";
    document.getElementById("ssc").value = "";
    document.getElementById("hsc").value = "";
    document.getElementById("fy").value = "";

    alert("Form Submiited Successfully!");
  });
*/
