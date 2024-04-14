
// car.html với Product-detail.html
var currentSlide = 0;
var listdo = [
    do1 = {
        id: 1,
        ten: "Áo len dài tay",
        hinh: ["../img/img nữ/Áo len dài tay/1.png", "../img/img nữ/Áo len dài tay/2.png", "../img/img nữ/Áo len dài tay/3.png"],
        mota: "Viết mô tả",
        gia: 25
    },
    do2 = {
        id: 2,
        ten: "Áo kiểu demi",
        hinh: ["../img/img nữ/Áo kiểu demi/1.png", "../img/img nữ/Áo kiểu demi/2.png", "../img/img nữ/Áo kiểu demi/3.png"],
        mota: "Viết mô tả",
        gia: 30
    },
    do3 = {
        id: 3,
        ten: "Áo tai dài có nơ",
        hinh: ["../img/img nữ/Áo kiểu tay dài cột nơ/1.png", "../img/img nữ/Áo kiểu tay dài cột nơ/2.png", "../img/img nữ/Áo kiểu tay dài cột nơ/3.png"],
        mota: "Viết mô tả",
        gia: 25
    },
    do4 = {
        id: 4,
        ten: "Áo 2 dây hoa nổi",
        hinh: ["../img/img nữ/áo 2 dây hoa nổi/1.png", "../img/img nữ/áo 2 dây hoa nổi/2.png", "../img/img nữ/áo 2 dây hoa nổi/3.png"],
        mota: "Viết mô tả",
        gia: 30
    },
    do5 = {
        id: 5,
        ten: "Váy ngắn xếp ly",
        hinh: ["../img/img nữ/váy ngắn xếp ly/1.png", "../img/img nữ/váy ngắn xếp ly/2.png", "../img/img nữ/váy ngắn xếp ly/3.png"],
        mota: "Viết mô tả",
        gia: 40
    },
    do6 = {
        id: 6,
        ten: "Đầm caro",
        hinh: ["../img/img nữ/Đầm Caro/1.png", "../img/img nữ/Đầm Caro/2.png", "../img/img nữ/Đầm Caro/3.png"],
        mota: "Viết mô tả",
        gia: 30
    },
    do7 = {
        id: 7,
        ten: "Đầm babydoll",
        hinh: ["../img/img nữ/Đầm babydoll/1.png", "../img/img nữ/Đầm babydoll/2.png", "../img/img nữ/Đầm babydoll/3.png"],
        mota: "Viết mô tả",
        gia: 50
    },
    do8 = {
        id: 8,
        ten: "Chân váy jean túi L",
        hinh: ["../img/img nữ/chân váy jean túi L/1.png", "../img/img nữ/chân váy jean túi L/2.png","../img/img nữ/chân váy jean túi L/3.png"],
        mota: "Viết mô tả",
        gia: 30
    },
    do9 = {
        id: 9,
        ten: "Áo khoác Blazer",
        hinh: ["../img/img nam/Áo khoác Blazer/1.png", "../img/img nam/Áo khoác Blazer/2.png","../img/img nam/Áo khoác Blazer/3.png"],
        mota: "Viết mô tả",
        gia: 30
    },
    do10 = {
        id: 10,
        ten: "Áo khoác vải thun",
        hinh: ["../img/img nam/Áo khoác vải thun/1.png", "../img/img nam/Áo khoác vải thun/2.png","../img/img nam/Áo khoác vải thun/3.png"],
        mota: "Viết mô tả",
        gia: 30
    },
    do11 = {
        id: 11,
        ten: "Hoodie",
        hinh: ["../img/img nam/Hoodie/1.png", "../img/img nam/Hoodie/2.png","../img/img nam/Hoodie/3.png"],
        mota: "Viết mô tả",
        gia: 25
    },
    do12 = {
        id: 12,
        ten: "Áo khoác Kaki",
        hinh: ["../img/img nam/Áo khoác Kaki/1.png", "../img/img nam/Áo khoác Kaki/2.png","../img/img nam/Áo khoác Kaki/3.png"],
        mota: "Viết mô tả",
        gia: 20
    },
    do13 = {
        id: 13,
        ten: "Áo thun cổ tay tròn",
        hinh: ["../img/img nam/Áo thun cổ tay tròn/1.png", "../img/img nam/Áo thun cổ tay tròn/3.png"],
        mota: "Viết mô tả",
        gia: 15
    },
    do14 = {
        id: 14,
        ten: "Sơ mi sọc tay dài",
        hinh: ["../img/img nam/Sơ mi sọc tay dài/1.png", "../img/img nam/Sơ mi sọc tay dài/2.png","../img/img nam/Sơ mi sọc tay dài/3.png"],
        mota: "Viết mô tả",
        gia: 20
    },
    do15 = {
        id: 15,
        ten: "Quần sort",
        hinh: ["../img/img nam/Quần sort/1.png", "../img/img nam/Quần sort/2.png","../img/img nam/Quần sort/3.png"],
        mota: "Viết mô tả",
        gia: 15
    },
    do16 = {
        id: 16,
        ten: "Áo sơ mi tay dài",
        hinh: ["../img/img nam/Áo sơ mi tay dài/1.png", "../img/img nam/Áo sơ mi tay dài/2.png","../img/img nam/Áo sơ mi tay dài/3.png"],
        mota: "Viết mô tả",
        gia: 25
    }
];
sessionStorage.setItem("listdo", JSON.stringify(listdo))//đây


function showSlide(n) {
    var slides = document.querySelectorAll('.slide');
    if (n < 0) {
        n = slides.length - 1;
    } else if (n >= slides.length) {
        n = 0;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');
    currentSlide = n;
}

// function prev() {
//     showSlide(currentSlide - 1);
// };

// function next() {
//     showSlide(currentSlide + 1);
// };

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slider .slide img");
    let currentIndex = 0;

    function showBanner(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.opacity = 1; // Show the slide
            } else {
                slide.style.opacity = 0; // Hide the slide
            }
        });
    }

    showBanner(currentIndex); // Show the first slide
    const intervalID = setInterval(nextBanner, 6000);

    function nextBanner() {
        currentIndex = (currentIndex + 1) % slides.length;
        showBanner(currentIndex);
    }
});

function downSearch() {
    var dropdown = document.getElementById("form-search");
    if (dropdown.style.maxHeight === "50px") {
        dropdown.style.maxHeight = "0px";
    }
    else {
        dropdown.style.maxHeight = "50px";
    }
}
function hienthi(id) {
    sessionStorage.setItem('id', id);
}

//var originalImageSrc = "../img/img/box1.1.png";
//var newImageSrc = "../img/img/box1.2.png";
//var imageElement = document.getElementById("productImage");

//function changeImage() {
//    fadeOut(imageElement, function() {
//        imageElement.src = newImageSrc;
//        fadeIn(imageElement);
//    });
//}

//function restoreImage() {
 //   fadeOut(imageElement, function() {
//        imageElement.src = originalImageSrc;
//        fadeIn(imageElement);
//    });
//}

//function fadeIn(element) {
//    var op = 0.1;  // initial opacity
//    element.style.opacity = op;
//    var timer = setInterval(function () {
//        if (op >= 1) {
//            clearInterval(timer);
//        }
//        element.style.opacity = op;
//        op += op * 0.1;
//    }, 50);
//}

//function fadeOut(element, callback) {
//    var op = 1;  // initial opacity
//    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
            if (callback) {
                callback();
            }
        }
        element.style.opacity = op;
        op -= op * 0.1;
//    }, 50);
//}


function plus() {
    n = document.getElementById("quantity")
    n.innerText = parseInt((n.innerText)) + 1
}
function minus() {
    n = document.getElementById("quantity")
    if (parseInt((n.innerText)) > 1)
        n.innerText = parseInt((n.innerText)) - 1
}
function themsl(id) {
    cart = {
        id: id,
        sl: document.getElementById("quantity").innerText
    }
    sessionStorage.setItem(id, JSON.stringify(cart))
}

function checkTenDN() {
    let ten = document.getElementById("username").value;
    if (ten == "") {
        document.getElementById("ertendn").innerHTML = "Username must not be empty";
        return false;
    }
    else {
        let patten = /^\w{3,16}/;
        if (patten.test(ten)) {
            document.getElementById("ertendn").innerHTML = "*";
            return true;
        } else {
            document.getElementById("ertendn").innerHTML = "Wrong syntax";
            return false;
        }
    }

}

function checkMatKhau() {
    let mk = document.getElementById("password").value;
    if (mk == "") {
        document.getElementById("ermk").innerHTML = "Password must not be empty";
        return false;
    }
    else {
        let patmk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;;
        if (patmk.test(mk)) {
            document.getElementById("ermk").innerHTML = "*";
            return true;

        } else {
            document.getElementById("ermk").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function checkMatKhauRe() {
    let mkre = document.getElementById("password-confirm").value;
    if (mkre == "") {
        document.getElementById("ermkre").innerHTML = "Password confirm must not be empty";
        return false;
    }
    let patmkre = document.getElementById("password").value;
    let patmk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;;
    if (patmkre == mkre && patmk.test(mkre)) {
        document.getElementById("ermkre").innerHTML = "*";
        return true;
    } else {
        document.getElementById("ermkre").innerHTML = "Incorrect password confirm";
        return false;
    }
}

function checkHoTen() {
    let hoTen = document.getElementById("fullname").value;
    if (hoTen == "") {
        document.getElementById("erhoten").innerHTML = "Fullname must not be empty";
        return false;
    } else {
        let pathoten = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)+$/;
        if (pathoten.test(hoTen)) {
            document.getElementById("erhoten").innerHTML = "*";
            return true;
        } else {
            document.getElementById("erhoten").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function checkNgaySinh() {
    const ngaySinh = document.getElementById("birthdate").value;
    const birthday = new Date(ngaySinh);
    const today = new Date();
    if (birthday.getTime() < today.getTime()) {
        document.getElementById("erbirthdate").innerHTML = "*";
        return true;
    } else {
        document.getElementById("erbirthdate").innerHTML = "Date of birth must be before current date";
        return false;
    }
}

function checkSDT() {
    let sdt = document.getElementById("phone").value;
    if (sdt == "") {
        document.getElementById("ersdt").innerHTML = "Phone numbers must not be empty";
        return false;
    } else {
        let patSDT = /^0\d{9,10}$/;
        if (patSDT.test(sdt)) {
            document.getElementById("ersdt").innerHTML = "*";
            return true;
        } else {
            document.getElementById("ersdt").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function checkEmail() {
    let email = document.getElementById("emailDK").value;
    if (email == "") {
        document.getElementById("eremail").innerHTML = "Email must not be empty";
        return false;
    } else {
        let patemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (patemail.test(email)) {
            document.getElementById("eremail").innerHTML = "*";
            return true;
        } else {
            document.getElementById("eremail").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function Dangky() {
    if (checkTenDN() && checkMatKhau() && checkMatKhauRe() && checkHoTen() && checkNgaySinh() && checkSDT() && checkEmail()) {
        let email = document.getElementById("emailDK").value;
        let mk = document.getElementById("password").value;
        localStorage.setItem('emailDK', email);
        localStorage.setItem('password', mk);
        alert("Register successful. Email: " + email + " Password: " + mk);
    }
}

function Dangnhap() {
    let email = document.getElementById("emailDN").value;
    let mk = document.getElementById("passDN").value;
    let storedEmail = localStorage.getItem('emailDK');
    let storedPassword = localStorage.getItem('password');
    if (email === storedEmail && mk === storedPassword) {
        alert("Login successful");
        $("#myModal").modal("hide");
    } else {
        alert("Invalid email or password");
    }
}

function checkContact() {
    let con = document.getElementById("content").value;
    if (con == "") {
        document.getElementById("ercontact").innerHTML = "Contents must not be empty";
        return false;
    }
    else {
        document.getElementById("ercontact").innerHTML = "*";
        return true;
    }
}

function Lienhe() {
    if (checkHoTen() && checkSDT() && checkEmail() && checkContact()) {
        alert("Send successful");
    }
    else {
        alert("Send unsuccessful");
    }
}
function update_price(id, n) {
    listdo = JSON.parse(sessionStorage.getItem('listdo'));//đây
    Do = listdo[id - 1] //đây
    qtt = document.getElementById("quantity" + id)
    ttp = document.getElementById("total_price" + id)
    if (n > 0)
        qtt.innerText = parseInt(qtt.innerText) + 1
    else if (parseInt(qtt.innerText) > 1)
        qtt.innerText = parseInt(qtt.innerText) - 1
    ttp.innerText = "$" + parseInt(qtt.innerText) * Do.gia//đây
    cart = {
        id: id,
        sl: parseInt(qtt.innerText)
    }
    sessionStorage.setItem(id, JSON.stringify(cart))
    update_total_bill()
}
function update_total_bill() {
    total_bill = 0
    for (i = 1; i <= 8; i++) {
        cart = JSON.parse(sessionStorage.getItem(i))
        if (cart !== null) {
            Do = listdo[cart.id - 1]//đây
            total_bill += parseInt(cart.sl) * parseInt(Do.gia)//đây
        }
    }
    document.getElementById("total_bill").innerText = "total bill: $" + total_bill
}

function remove_product(id) {
    table = document.getElementById("tblcart");
    rowToRemove = document.getElementById(id);
    table.deleteRow(rowToRemove.rowIndex);
    sessionStorage.setItem(id, null)
    update_total_bill()
}

function buy() {
    var cart = document.getElementById("tblcart");
    if (cart.rows.length > 1) {
        alert("Buy successful");
    } else {
        alert("Empty cart");
    }
}

function resetCart() {
    var table = document.getElementById("tblcart");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
    }
    sessionStorage.clear();
    update_total_bill();
}

// responsive

let nav = document.getElementById('nav-bar')
let nav_rps = document.getElementById('responsive')

nav_rps.onclick = function () {
    let isClose = nav.style.zIndex
    if (isClose == 0) {
        nav.style.zIndex = 1
        nav.style.top = '50px'
    }
    else {
        nav.style.zIndex = 0
        nav.style.top = '-500px'
    }
}