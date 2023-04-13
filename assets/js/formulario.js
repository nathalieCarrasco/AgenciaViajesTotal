const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const packageSelect = document.getElementById('package');
const nameFeedback = document.getElementById('name-feedback');
const emailFeedback = document.getElementById('email-feedback');
const phoneFeedback = document.getElementById('phone-feedback');
const packageFeedback = document.getElementById('package-feedback');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (validateForm()) {
    form.submit();
  }
});

function validateForm() {
  let isValid = true;
  
  if (!isValidName(nameInput.value.trim())) {
    nameInput.classList.add('is-invalid');
    nameFeedback.innerText = 'Por favor, ingrese un nombre válido';
    isValid = false;
  } else {
    nameInput.classList.remove('is-invalid');
    nameFeedback.innerText = '';
  }
  
  if (!isValidEmail(emailInput.value.trim())) {
    emailInput.classList.add('is-invalid');
    emailFeedback.innerText = 'Por favor, ingrese un correo electrónico válido';
    isValid = false;
  } else {
    emailInput.classList.remove('is-invalid');
    emailFeedback.innerText = '';
  }
  
  if (!isValidPhone(phoneInput.value.trim())) {
    phoneInput.classList.add('is-invalid');
    phoneFeedback.innerText = 'Por favor, ingrese un teléfono válido';
    isValid = false;
  } else {
    phoneInput.classList.remove('is-invalid');
    phoneFeedback.innerText = '';
  }
  
  if (!isValidPackage(packageSelect.value)) {
    packageSelect.classList.add('is-invalid');
    packageFeedback.innerText = 'Por favor, seleccione un paquete válido';
    isValid = false;
  } else {
    packageSelect.classList.remove('is-invalid');
    packageFeedback.innerText = '';
  }
  
  return isValid;
}

function isValidName(name) {
  return /^[a-zA-Z ]+$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^\d{10}$/.test(phone);
}

function isValidPackage(package) {
  return package !== '';
}
