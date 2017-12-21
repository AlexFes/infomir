let dropdownAction = (elemId) => {
    document.getElementById(elemId).classList.toggle("show");
};

window.onclick = (event) => {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");

        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

let checkboxValidate = (flag) => {
    if (document.getElementById('second-checkbox').checked) {
        flag = 0;

        return flag;
    }

    return flag;
};
