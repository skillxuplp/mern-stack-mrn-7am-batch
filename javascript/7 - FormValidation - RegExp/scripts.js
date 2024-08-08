// 'use strict';

// accessing all values from its respective id's
const form = document.getElementById("form");
const username = document.getElementById("username");
const emailaddress = document.getElementById("emailaddress");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

// show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
        if(input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}


// check email
function checkEmail(input) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${getFieldName(input)} is not a valid`);
    }
}

// check length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// check password match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, "passwords do not match");
    }
}

// getFieldName()
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listeners
form.addEventListener("submit", function (event) {
    event.preventDefault();

    checkRequired([username, emailaddress, password, confirm_password]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 15);
    checkEmail(emailaddress);
    checkPasswordsMatch(password, confirm_password);
});