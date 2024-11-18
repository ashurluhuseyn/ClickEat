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


var modal = document.getElementById("myModal");
var btn = document.querySelector(".terms-link");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



// Terms modal tabmenu
const modal_tabLinks = document.querySelectorAll('.modal-tablinks button')


for(let tablink of modal_tabLinks) {
    tablink.onclick = function() {
        let active = document.querySelector('.modal-tab-active')
        active.classList.remove('modal-tab-active')
        this.classList.add('modal-tab-active')
    }
}



// Sidebar actions
const menu_icon = document.querySelector('.menu-icon')
const mobile_sidebar = document.querySelector('.mobile-sidebar')
const mobile_sidebar_close_icon = document.querySelector('.sidebar-close-icon')


menu_icon.onclick = function() {
    mobile_sidebar.classList.add('mobile-sidebar-active')
}
mobile_sidebar_close_icon.onclick = function() {
    mobile_sidebar.classList.remove('mobile-sidebar-active')
}