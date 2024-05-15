import emailjs from 'emailjs-com'

export const sendEmail = (e, setFailed, setSuccess, form) => {
    e.preventDefault();

    const { name, email, subject, message } = e.target.elements;

    let hasEmptyField = false;

    if (!name.value) {
        name.style.borderColor = 'red';
        hasEmptyField = true;
        setFailed(true)
        setSuccess(false);
    } else {
        name.style.borderColor = '';
    }

    if (!email.value) {
        email.style.borderColor = 'red';
        hasEmptyField = true;
        setFailed(true)
        setSuccess(false);
    } else {
        email.style.borderColor = '';
    }

    if (!subject.value) {
        subject.style.borderColor = 'red';
        hasEmptyField = true;
        setFailed(true)
        setSuccess(false);
    } else {
        subject.style.borderColor = '';
    }

    if (!message.value) {
        message.style.borderColor = 'red';
        hasEmptyField = true;
        setFailed(true)
        setSuccess(false);
    } else {
        message.style.borderColor = '';
    }

    if (hasEmptyField) {
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.style.borderColor = 'red';
        return;
    }

    emailjs.sendForm(`service_pihc4ad`, `template_6cymg67`, form.current, `PDUdg0JdDTMFftncl`)
    .then((result) => {
        form.current.reset();
        setSuccess(true);
        setFailed(false)
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}