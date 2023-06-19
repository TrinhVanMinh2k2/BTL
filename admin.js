class Product {
    constructor(txtImg, txtName, Price) {
        this.txtImg = txtImg;
        this.txtName = txtName;
        this.Price = Price;
    }
};
var products = JSON.parse(localStorage.getItem('products')) || [];

    // hiển thị 
   function hienThi() {
    let rows = '';
    for (let b of products) {
        rows += `<tr>
                    <td>
                        <img src="img/${b.txtImg}" width="80px" height="80px" alt=""/>
                    </td>
                    <td>${b.txtName}</td>
                    <td>${b.Price}</td>
                    <td>
                        <button class="btn-danger" style="border: none; height: 35px; width: 65px; position: absolute; margin-top: -20px; margin-left: -30px;" onclick="Xoa('${b.txtName}')">Xóa</button>
                    </td>
                </tr>`;
    }
    document.getElementById('listProduct').innerHTML = rows;
   };

   // thêm mới

   function themMoi(){
    let t = getProductInfo();

    if (products.find(x => x.txtName === t.txtName)){
        alert('Đã có mặt hàng này rồi vui lòng nhập lại!');
        return;
    }
    document.getElementById('txtImg').value = '';
    document.getElementById('txtName').value = '';
    document.getElementById('Price').value = '';
    products.push(t);
    localStorage.setItem('products', JSON.stringify(products));
    hienThi(products);
   }

   // xóa
   function Xoa (){
    if (confirm('Bạn có muốn xóa không')){
        let ind = products.findIndex(x => x.txtName === txtName);
        products.splice(ind, 1);
        hienThi(products);
    }
   }

   function getProductInfo(){
    let txtName = document.getElementById('txtName').value;
    let txtImg = $('#txtImg').prop('files')[0].name;
    let Price = document.getElementById('Price').value;

    let product = new Product(txtImg, txtName, Price);
    return product;
   }

   hienThi();