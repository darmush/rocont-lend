const form = document.getElementById('contact-form');

const inputName = document.getElementById('name');
const inputTel = document.getElementById('tel');
const checkbox = document.getElementById('checkbox');


// Предотвращение автоматической отправки формы
async function handleFormSubmit(event) {
    event.preventDefault();

    const data = serializeForm(event.target);
    const response = await sendData(data);

    // Очистить форму после отправки
    inputName.value = '';
    inputTel.value = '';
    checkbox.checked = false;
};

function serializeForm(formNode) {
    const data = new FormData(formNode);
    console.log([...data.entries()]);
    return data
};

async function sendData(data) {
    return await fetch('/api/apply/', {
    method: 'POST',
        body: data,
    });
};

function checkValidity(event) {
    const formNode = event.target.form;
    const isValid = formNode.checkValidity();

    formNode.querySelector('button').disabled = !isValid;
};

form.addEventListener('input', checkValidity);

form.addEventListener('submit', handleFormSubmit);
