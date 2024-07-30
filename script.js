
function calculateAge() {

    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;

    const birthdateParts = birthdateInput.split("-");
    const day = parseInt(birthdateParts[0]);
    const month = parseInt(birthdateParts[1] - 1);
    const year = parseInt(birthdateParts[2]);
    const birthDate = new Date(year, month, day);


    const isValidDate = (date) => {

        return(
            Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date.getTime())
        );
    };

    if(!isValidDate(birthDate)) {
        alert("Invalid Date Format, Please Enter a Valid Date in DD-MM-YYYY Format");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875);
    const ageInYears = Math.floor(ageInDays / 365.25);

    const resultContainer = document.getElementById("wrapper");
    const result = document.getElementById("result");

    result.innerHTML = 
    `<div class="result-item">
        <h3>Age: </h3>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
    </div>

    <div class="result-item">
        <h3>Months Passed: </h3>
        <p>${ageInMonths} Months</p>
    </div>

    <div class="result-item">
        <h3>Weeks Passed: </h3>
        <p>${ageInWeeks} Weeks</p>
    </div>

    <div class="result-item">
        <h3>Days Passed: </h3>
        <p>${ageInDays} Days</p>
    </div>

    <div class="result-item">
        <h3>Hours Passed: </h3>
        <p>${ageInHours} Hours</p>
    </div>

    <div class="result-item">
        <h3>Minutes Passed: </h3>
        <p>${ageInMinutes} Minutes</p>
    </div>

    <div class="result-item">
        <h3>Seconds Passed: </h3>
        <p>${ageInSeconds} Seconds</p>
    </div>

    <div class="result-item">
        <h3>Milliseconds Passed: </h3>
        <p>${ageInMilliseconds} Milliseconds</p>
    </div>
    
    
    `;


    resultContainer.style.display = "block";
}




const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAge();
});

