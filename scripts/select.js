const selectConts = document.querySelectorAll('.custom-select');
let x = null;
selectConts.forEach(selectCont => {
    const selectedOption = selectCont.querySelector('.selected-option-name');
    selectCont.addEventListener('click', () => {
        if (x && x !== selectCont) {
            x.classList.remove('expanded')
        }
        x = selectCont;
        selectCont.classList.toggle('expanded');        
    });
    const options = selectCont.querySelectorAll('.custom-option');
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const value = +option.dataset.value; // will be needed
            const text = option.dataset.text;
            selectedOption.innerHTML = text;
            selectCont.classList.remove('expanded');
        });
    });
});

const btn = document.querySelector('.filtr');
const f = document.querySelector('.parent-filters');
const esc = document.querySelector('.esc')

btn.addEventListener('click', () => {
    f.classList.toggle('bacel');
})
esc.addEventListener('click', () => {
    f.classList.remove('bacel');
})




