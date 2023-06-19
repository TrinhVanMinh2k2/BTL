class Product {
    constructor(txtImg, txtName, Price) {
        this.txtImg = txtImg;
        this.txtName = txtName;
        this.Price = Price;
    }
};

var products = JSON.parse(localStorage.getItem('products')) || [];


var carts = JSON.parse(sessionStorage.getItem('carts')) || [];

function hienThi() {
    let div = '';
    for (let b of products) {
        div += `<div class="col product">
                    <div>
                        <img src="./img/${b.txtImg}" class="img-featured" alt="">
                        <div class="featured-action">
                            <a href="./shoping.html"><button type="button" class="btn-danger" onclick="addToCart('${b.txtName}')">QUICK VIEW</button></a>
                        </div>
                    </div>
                    <div class="electronics">
                        <div class="title-total">
                        <P class="title-elec">ELECTRONICS,</P>
                        <P class="title-elec">FASHTION,</P>
                        <P class="title-elec">WATCHES</P>
                        </div>
                        <div class="heart">
                            <i class="fa fa-heart-o" aria-hidden="true"></i>
                        </div>
                    </div>
                        <p class="title-product">${b.txtName}</p>
                    <div class="star">
                        <a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
                        <a href=""><i class="fa fa-star" aria-hidden="true"></i></a>
                    </div>
                    <div>
                        <span class="price-product" style="margin-top: 0;">$ ${b.Price}</span>
                    </div>
                </div>`;
    }
    document.getElementById('product').innerHTML = div;
   };
hienThi(products);


function addToCart(productName) {
    let pro = products.find(x => x.txtName === productName);
    let cartItem = carts.find(x => x.product.txtName === productName);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        carts.push({
            product: pro,
            price: Price,
            quantity: 1
        })
    }
    sessionStorage.setItem('carts', JSON.stringify(carts));
};
