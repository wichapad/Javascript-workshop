const formContainer = document.getElementById("form");

const userName = document.getElementById("username");
const email = document.getElementById("email");
const passWord = document.getElementById("password");
const confirmPass = document.getElementById("confirmPassword");

formContainer.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInput([userName, email, passWord, confirmPass]);

    if (!validateEmail(email.value.trim())) {
        showError(email, "Email is invalid");
    } else {
        showSuccess(email);
    }
    checkPassWord(passWord, confirmPass);
    checkInputLength(userName, 5, 10);
    checkInputLength(passWord, 5, 12);


});

function showError(input, message) {
    const formControl = input.parentElement; //element ตัวแม่
    formControl.className = "formControl error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement; //element ตัวแม่
    formControl.className = "formControl success";
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function checkInput(inputArray) {
    inputArray.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `please Enter ${getInputCase(input)}`);
        } else {
            showSuccess(input);
        }
    });
}

function getInputCase(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPassWord(passWord, confirmPass) {
    if (passWord.value !== confirmPass.value) {
        showError(confirmPass, "password do not match");
    }
}

function checkInputLength(input, min, max) {
    if (input.value.length <= min) {
        showError(input, `${getInputCase(input)} need more ${min} word `)
    } else if (input.value.length > max) {
        showError(input, `${getInputCase(input)} not more ${max} word `)
    } else {
        showSuccess(input);
    }

}
