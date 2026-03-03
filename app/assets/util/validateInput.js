function validateInput(input, regex, feedbackElement, type) {
    const value = input.value.trim();

    function clearValidationWarning(...args) {
        args[0].textContent = ''
    }

    if (value === "") {
        input.classList.remove("valid", "invalid");
        feedbackElement.textContent = "";
        feedbackElement.style.display = 'none';
        return;
    }

    if (regex.test(value)) {
        input.classList.add("valid");
        input.classList.remove("invalid");
        if (feedbackElement.textContent.includes('❌ ')) {
            feedbackElement.textContent = `✅`;
        }
        feedbackElement.className = "feedback valid-text";
        setTimeout(clearValidationWarning, 3000, feedbackElement)
    } else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        const msg = t(`invalid_${type}`)
        feedbackElement.textContent = `❌ ${msg}`;
        feedbackElement.style.display = 'block';
        feedbackElement.className = "feedback invalid-text";
    }

    if ($('.invalid-text').text().length > 0) {
    } else {
        $('.passive').removeClass('passive')
    }
}