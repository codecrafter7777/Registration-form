
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const submitButton = document.getElementById("submitButton");

        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");

        function validateName() {
            if (nameInput.value.trim() === '') {
                nameError.textContent = 'Name cannot be empty.';
                return false;
            } else {
                nameError.textContent = '';
                return true;
            }
        }

        function validateEmail() {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                emailError.textContent = 'Please enter a valid email address.';
                return false;
            } else {
                emailError.textContent = '';
                return true;
            }
        }

        function validatePassword() {
            if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                return false;
            } else {
                passwordError.textContent = '';
                return true;
            }
        }

        function validateForm() {
            const isNameValid = validateName();
            const isEmailValid = validateEmail();
            const isPasswordValid = validatePassword();
            submitButton.disabled = !(isNameValid && isEmailValid && isPasswordValid);
        }

        nameInput.addEventListener('input', validateForm);
        emailInput.addEventListener('input', validateForm);
        passwordInput.addEventListener('input', validateForm);

        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            if (submitButton.disabled === false) {
                alert('Registration successful!');
            }
        });
    