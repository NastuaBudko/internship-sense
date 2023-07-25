const passwordInput = document.getElementById("password");
const sections = document.querySelectorAll(".password-strength__section");

passwordInput.addEventListener("input", checkPasswordStrength);

function checkPasswordStrength() {
    const password = passwordInput.value;

    sections.forEach(section => {
        section.classList.remove("password-weak", "password-medium", "password-strong");
        section.classList.add("password-weak");
    });

    if (password === "") {
        return;
    }

    if (password.length < 8) {
        sections.forEach(section => {
            section.classList.remove("password-weak", "password-medium", "password-strong");
            section.classList.add("password-weak");
        });
        return;
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+[\]{};':"\\|,.<>/?]/.test(password);

    if (hasLetters && !hasDigits && !hasSymbols) {
        sections[0].classList.remove("password-weak");
        sections[0].classList.add("password-strong");
    } else if (
        (hasLetters && hasDigits && !hasSymbols) ||
        (!hasLetters && hasDigits && hasSymbols) ||
        (hasLetters && !hasDigits && hasSymbols)
    ) {
        sections[0].classList.remove("password-weak");
        sections[0].classList.add("password-medium");
        sections[1].classList.remove("password-weak");
        sections[1].classList.add("password-medium");
    } else if (hasLetters && hasDigits && hasSymbols) {
        sections.forEach(section => {
            section.classList.remove("password-weak", "password-medium");
            section.classList.add("password-strong");
        });
    }
}
