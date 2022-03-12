//Bài 1:
/**
 * - Đầu vào:
 * số ngày làm
 * lương 1 ngày 100 000
 * - Xử Lý:
 * tạo biến cho số ngày làm và lương 1 ngày
 * gán giá trị cho lương 1 ngày
 * tao bien tinh tong
 * lay lương 1 ngay nhân cho số ngày làm ra tổng lương
 * in kết qua tong luong ra
 * - Kết Quả:
 * Tổng Lương
 */
document.getElementById("btnTinhLuong").onclick = function (){
    var luong1ngay = 100000;
    var soNgayLam = document.getElementById("txtSoNgayLam").value;
    parseInt(soNgayLam);
    var tong = luong1ngay*soNgayLam;
    var kQua = "Tổng lương là: " + tong;
    console.log(kQua);


    document.getElementById("txtKetQua").innerHTML = kQua;

    //style
    document.getElementById("txtKetQua").className = ("ket-qua");
};

//Bài 2:

/**
 * - Đầu vào:
 * 5 số nguyên dương.
 * 
 * - Xử lý: 
 * tạo biến 5 số nguyên dương
 * tao biến trung bình cộng
 * Công 5 số nguyên dương sau đó chia cho 5
 * tạo biến kết quả trung bình 
 * in kq ra
 * - Đầu ra:
 * trung bình cộng 5 số
 */
document.getElementById("btnTinhTrungBinh").onclick = function(){
    var so1 = document.getElementById("txtSo1").value*1;
    var so2 = document.getElementById("txtSo2").value*1;
    var so3 = document.getElementById("txtSo3").value*1;
    var so4 = document.getElementById("txtSo4").value*1;
    var so5 = document.getElementById("txtSo5").value*1;

    var trungBinh = (so1+so2+so3+so4+so5)/5;
    var kQTB = "Trung bình cộng 5 số là: "+trungBinh;
    console.log(trungBinh);

    document.getElementById("txtKQTB").innerHTML = kQTB;

    document.getElementById("txtKQTB").className = ("ket-qua-tb");

};

// Bài 3:
/**
 * - Đầu vào
 * tiền USD cần quy đỗi
 * Giá trị quy đỗi tiền việt
 * 
 * - Xử lý
 * tạo biến tiền usd và biến tiền vnd
 * gán giá trị cho tiền vnd
 * tạo biến tình tiền bằng usd*vnd
 * in kết quả ra
 * - Kết quả
 * Tiền VNĐ
 */
document.getElementById("btnQuyDoi").onclick = function(){
    var USD = document.getElementById("txtUSD").value*1;
    var VND = 23500;
    var tinhTien = USD*VND;
    var kQQuyDoi="Số tiền là: "+ tinhTien +" VND";
    console.log(tinhTien);

    document.getElementById("txtVND").innerHTML = kQQuyDoi;

    document.getElementById("txtVND").className = ("quy-doi-tien");
};
// Bài 4:
/**
 * - Đầu vào
 * chiều dài hcn
 * chiều rộng hcn
 * - Xử lý
 * tạo 2 biến gán giá trị chiều dài và chiều rộng được nhập vào
 * tạo biến chu vi
 * tính chu vi dùng công thức (dài+rộng)*2
 * in kết quả ra
 * tạo biến diện tích
 * tính diện tình dúng công thức dài * rộng
 * in kết quả ra
 * 
 * - Đầu ra
 * Chu vi HCN
 * Diện tích HCN
 */
document.getElementById("btnTinhChuVi").onclick = function(){
    var chieuDai = document.getElementById("txtChieuDai").value*1;
    var chieuRong = document.getElementById("txtChieuRong").value*1;
    var chuVi = (chieuDai+chieuRong)*2;
    var kQChuVi = "Chu Vi HCN là: "+ chuVi;
    document.getElementById("txtChuVi").innerHTML = kQChuVi;

    document.getElementById("txtChuVi").className = ("chuvi-dientich");
}
document.getElementById("btnTinhDienTich").onclick =function(){
    var chieuDai = document.getElementById("txtChieuDai").value*1;
    var chieuRong = document.getElementById("txtChieuRong").value*1;
    var dienTich = chieuDai*chieuRong;
    var kQDienTich = "Diện Tích HCN là: " + dienTich;
    document.getElementById("txtDienTich").innerHTML= kQDienTich;
    document.getElementById("txtDienTich").className = ("chuvi-dientich");
}
// Bài 5:
/**
 * - Đầu vào
 * số nguyên dương có 2 chữ số
 * 
 * - Xử Lý
 * tạo biến gán giá trị cho số hai chữ số
 * tách số hang chục theo công thức math.floor(n%100/10)
 * tách số hàng đơn vị theo công thức n%10
 * lấy số hàng chục + số hàng đơn vị
 * in kết quả ra
 * - Đầu ra
 * Tổng ký số
 */
document.getElementById("btnTinhKySo").onclick =function(){
    var so2ChuSo = document.getElementById("txtSo2ChuSo").value*1;
    var soHangChuc= Math.floor(so2ChuSo%100/10);
    var soDonVi = so2ChuSo%10;
    var tongKySo = soDonVi+soHangChuc;
    var kqTongKySo = "Tổng ký số là: "+ tongKySo;
    document.getElementById("txtKqKiSo").innerHTML = kqTongKySo;
    document.getElementById("txtKqKiSo").className = ("ky-so");
}