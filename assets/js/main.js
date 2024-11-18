const getCategories = async () => {
    fetch('./data/category.json')
    .then(res => res.json())
    .then(data => {
        let x = ''
        data.forEach(item => {
            return(
                x += `
                    <li>
                        <span>${item.title}</span>
                    </li>
                `
            )
        })

        document.querySelector('.categories ul').innerHTML = x
    })
    .catch(err => console.log(err))
}

const getProducts = async () => {
    fetch('./data/products.json')
    .then(res => res.json())
    .then(data => {
        let x = ''
        data.forEach(item => {
            return(
                x += `
                    <div class="product-item">
                        <div class="item-image">
                            <img src=${item.image} alt="">
                        </div>
                        <div class="item-content">
                            <h1>${item.title}</h1>
                            <div class="item-content__bottom">
                                <p>${item.price} &#8380</p>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                `
            )
        })

        document.querySelector('.products-wrap').innerHTML = x
    })
    .catch(err => console.log(err))
}

getCategories()
getProducts()