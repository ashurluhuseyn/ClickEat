const search_close_btn = document.querySelector('.search-close');
const search_form = document.querySelector('.search-form');
const search_icon = document.querySelector('.search-icon');

search_icon.onclick = () => {
    search_form.classList.toggle('search-active')
}

search_close_btn.onclick = () => {
    search_form.classList.remove('search-active')
}

const filter_close_btn = document.querySelector('.filter-section__close')
const filter_btn = document.querySelector('.left-links-filter')
const filter_section = document.querySelector('.filter-section')

filter_btn.addEventListener('click', () => {
    filter_section.style.display = 'block'
})

filter_close_btn.addEventListener('click', function() {
    this.parentElement.style.display = 'none'
})


function updateRangeValues() {
    let minValue = document.getElementById('min-range').value;
    let maxValue = document.getElementById('max-range').value;

    if (parseInt(minValue) >= parseInt(maxValue)) {
        minValue = maxValue - 1;
        document.getElementById('min-range').value = minValue;
    }

    if (parseInt(maxValue) <= parseInt(minValue)) {
        maxValue = parseInt(minValue) + 1;
        document.getElementById('max-range').value = maxValue;
    }

    document.getElementById('min-value').textContent = minValue + " AZN";
    document.getElementById('max-value').textContent = maxValue + " AZN";
}
