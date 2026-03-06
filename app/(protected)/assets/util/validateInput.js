
export default function validateInput(input, regex, feedbackElement, type) {
    console.log('validating input...', input, regex, feedbackElement, type);
    debugger
    function getErrorMessage (type) {
        const t = t(`invalid_${type}`)
        // return (t) ? t(`invalid_${type}`) : (`invalid_${type}`)
    }

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
        
        // const msg = (t) ? t(`invalid_${type}`) : (`invalid_${type}`)

        let msg = getErrorMessage (type)
        console.log('validation error message: ', msg)

        feedbackElement.textContent = `❌ ${msg}`;
        feedbackElement.style.display = 'block';
        feedbackElement.className = "feedback invalid-text";
    }

    /* if ($('.invalid-text').text().length > 0) {
    } else {
        $('.passive').removeClass('passive')
    } */

    const invalidTextElements = document.querySelectorAll('.invalid-text');
    let hasInvalidText = false;
    invalidTextElements.forEach(el => {
        if (el.textContent.length > 0) {
            hasInvalidText = true;
        }
    });
    if (!hasInvalidText) {
        document.querySelectorAll('.passive').forEach(el => {
            el.classList.remove('passive');
        });
    }
}