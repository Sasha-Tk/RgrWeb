document.getElementById("vaccination-btn").onclick = function () {
    setTimeout(() => {
        $('#myModal').modal('show');
    }, 3000);

    window.open("https://diia.gov.ua/services/zapis-do-lista-ochikuvannya-vakcinaciyi-vid-covid-19", "_blank");
}
function submit() {
    const radios = document.getElementsByName('radio');

    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            localStorage.setItem(i, radios[i].value);
            break;
        }
    }
}
