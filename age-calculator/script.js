const currentDate = new Date();
const calculateBtn = document.querySelector("#calculate");
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const finalAge = document.querySelector("#final-age");
const agePlaceholder = document.querySelector("#age-placeholder");

calculateBtn.addEventListener("click", calculateMyAge);

function calculateMyAge() {
  const givenDate = new Date(document.getElementById("myDate").value);

  const birthDetails = {
    date: givenDate.getDate(),
    month: givenDate.getMonth() + 1,
    year: givenDate.getFullYear(),
  };

  const currentDateDetails = {
    date: currentDate.getDate(),
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
  };

  checkLeapYear(currentDateDetails.year);

  // User Input Validations
  if (birthDetails.year > currentDateDetails.year || (birthDetails.month > currentDateDetails.month && birthDetails.year === currentDateDetails.year) || (birthDetails.date > currentDateDetails.date && birthDetails.month === currentDateDetails.month && birthDetails.year === currentDateDetails.year)) {
    alert("ARE YOU KIDDIN ME!, You are not born yet.");
  }

  // Birth Year Calculations
  let birthYear = currentDateDetails.year - birthDetails.year;

  // Birth Month Calculations
  let birthMonth = birthDetails.month;
  if (currentDateDetails.month >= birthDetails.month) {
    birthMonth = currentDateDetails.month - birthDetails.month;
  } else {
    birthYear--;
    birthMonth = 12 + currentDateDetails.month - birthDetails.month;
  };

  // Birth Day Calculations
  let birthDate = birthDetails.day;
  if (currentDateDetails.date >= birthDetails.date) {
    birthDate = currentDateDetails.date - birthDetails.date;
  } else {
    birthMonth--;
    let days = months[currentDateDetails.month - 2];
    birthDate = days + currentDateDetails.date - birthDetails.date;
    if (birthMonth < 0) {
      birthMonth = 11;
      birthYear--;
    }
  }

  displayOutput(birthDate, birthMonth, birthYear)
};

function displayOutput(birthDate, birthMonth, birthYear) {
  agePlaceholder.innerHTML = "";
  finalAge.innerHTML = `Your age is ${birthYear} Year, ${birthMonth} Month, ${birthDate} Day`;
}

function checkLeapYear(year) {
  if (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0)) {
    months[1] = 29
  } else {
    months[1] = 28;
  };
}
