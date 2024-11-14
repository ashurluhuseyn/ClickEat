const tabLinks = document.querySelectorAll('.details-tab .tablinks button')
const tabContents = document.querySelectorAll('.details-tab .tabcontents div')


for(let tablink of tabLinks) {
    tablink.onclick = function() {
        let active = document.querySelector('.active')
        active.classList.remove('active')
        this.classList.add('active')
    }
}


const shippingTooltip = document.querySelector('.shipping-tooltip')
const shippingInfoIcon = document.querySelector('.shipping-info-icon')

shippingInfoIcon.onclick = () => {
    shippingTooltip.classList.toggle('active')
}