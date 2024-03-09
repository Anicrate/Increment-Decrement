let countValue = document.querySelector('#counter');

const inc = () => {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerHTML = value;
};

const dec = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerHTML = value;
};