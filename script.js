const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

// Criteria elements
const lengthCriteria = document.getElementById('length');
const numberCriteria = document.getElementById('number');
const specialCriteria = document.getElementById('special');

// Regular expressions for number and special character
const hasNumber = /\d/;
const hasSpecialChar = /[!@#$%^&*]/;

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let valid = true;

  // Check length
  if (password.length >= 8) {
    lengthCriteria.classList.remove('invalid');
    lengthCriteria.classList.add('valid');
  } else {
    lengthCriteria.classList.remove('valid');
    lengthCriteria.classList.add('invalid');
    valid = false;
  }

  // Check for at least one number
  if (hasNumber.test(password)) {
    numberCriteria.classList.remove('invalid');
    numberCriteria.classList.add('valid');
  } else {
    numberCriteria.classList.remove('valid');
    numberCriteria.classList.add('invalid');
    valid = false;
  }

  // Check for at least one special character
  if (hasSpecialChar.test(password)) {
    specialCriteria.classList.remove('invalid');
    specialCriteria.classList.add('valid');
  } else {
    specialCriteria.classList.remove('valid');
    specialCriteria.classList.add('invalid');
    valid = false;
  }

  // Enable or disable submit button based on validity
  submitBtn.disabled = !valid;
});
