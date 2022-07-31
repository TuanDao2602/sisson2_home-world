//
//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không


// let a = Number(prompt(" nhập vào số a"));
// let b = Number(prompt('nhập vào số b'));
// if (a %b ===0){
//     alert(` a chia hết cho b`);
// }
// else {
//     alert("a không chia hết cho b")
// }

//bài 2 Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// let a = Number(prompt("mời bạn nhập số tuổi "));
// if ( a <= 15){
//     alert(` bạn chưa đủ tuổi vào nhập học lớp 10 , xin lỗi bạn`);}

// else {
//         alert(`bạn đủ tuổi để vào học lớp 10 rồi `) ;
//     }
 

//bài 3  Nhập một số nguyên bất kỳ và in kết quả ra màn hình 
//để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// let a = Number(prompt('mời bạn nhập vào số nguyên a'));
// if (a > 0) {
//     alert(` số ${a } bạn vừa nhập có giá trị lớn hơn 0`);
// }
// else if ( a===0){
//     alert(` số nguyên ${a} bạn vừa nhập có giá trị = 0`);
// }
// else {
//     alert(` số ${a} bạn vừa nhập có giá trị bé hơn 0`);
// }

// bài 4 Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// let a = Number(prompt('nhập số nguyên a'));
// let b =Number(prompt('nhập số nguyên b'));
// let c= Number(prompt('nhập số nguyên c'));
// if ( a>b && a>c) {
//     alert(` số a là số có giá trị lớn nhất`);
// }
// else if ( b>a && b>c){
//     alert(` số b la số có giá trị lớn nhất`);
// }
// else{
//     alert(` số c là số có giá trị lớn nhất`);
// }

// bài 5 Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// let a = Number(prompt(' nhập vào điểm kiểm tra 15p '));
// let b = Number(prompt(' nhập vào điểm kiểm tra 45p'));
// let c = Number(prompt(' nhập vào điểm thi giữa kì '));
// let d = Number(prompt(' nhập vào điểm thi cuối kì'));
// let tb = (a + b +c +d )/4 ;
// if (tb >=8){
//     alert(`điểm trung bình ${tb} bạn là học sinh giỏi`);
// }
// else if (tb >=7 && tb<8) {
//     alert(`điểm trung bình ${tb} bạn là học sinh khá`);
// }
// else if (tb >=5 && tb <7) {
//     alert(`điểm trung bình ${tb} bạn là học sinh trung bình`);
// }
// else {
//     alert(`điểm trung bình ${tb} bạn là học sinh yếu`);
// }


//bài 6 Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// let a = Number(prompt(' nhập vào doanh số bán hàng của bạn :(   ) triệu'));
//  if ( a >=0 && a <=100 ){
//     let doanhso = (a*0.1);
//     alert(` hoa hồng của bạn nhận dc là : ${doanhso} triệu`);
// }
// else if (a> 100 &&a <=500){
//     let doanhso = (a*0.2)
//     alert(` hoa hồng bạn nhận được là : ${doanhso} triệu `);
// }
// else if (a >500 && a<=999){
//     let doanhso = (a*0.3)
//     alert(`hoa hồng bạn nhận được là :${doanhso} triệu`);
    
// }
// else  {
//     let doanhso = (a * 0.4);
//     alert(` doanh số bạn nhận được là :${doanhso} triệu`);
// }

// bài 7  Tính số cân nặng của cơ thể,
// Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khỏe dựa trên cân nặng và chiều cao. 
// Nó được tính bằng cách lấy cân nặng đơn vị tính kilogam chia cho bình phương của chiều cao đơn vị tính mét. 
// Công thức:
// bmi = weight / ( height ^ 2 )
// Chỉ số BMI đối với người trên 20 tuổi được phân loại và diễn giải theo bảng sau:
// Ví dụ: Một người có cân nặng là 65Kg và chiều cao là 1.75m thì BMI là 65 / 1.752 = 22.22. 
// Chỉ số này nằm trong khoảng 18.5 đến 25.0 cho nên được phân loại là Normal (bình thường).
// Khối lệnh để phân loại chỉ số cơ thể:
// + Nếu dưới 18: “Thiếu cân”
// + Nếu dưới 25: “Bình thường”
// + Nếu dưới 30 cân: “Thừa cân”
// + Còn lại: “Béo quá! Giảm cân đi”

// let weight =Number(prompt('nhập vào cân nặng của bạn : (  ) kg'));
// let height= Number(prompt(' nhập vào chiều cao của bạn cm'));
// let a =( height*0.01) ;
// let bmi = weight / (a*a);
// if (bmi > 0 && bmi < 18 ) {
//     alert(` chỉ số bmi của bạn là :${bmi} :  bạn là người gầy `) ;
// }
// else if (bmi>= 18 && bmi <25) {
//     alert(` chỉ số bmi của bạn là : ${bmi} bạn là người bình thường`);

// }
// else if (bmi >=25 && bmi <30){
//     alert(` chỉ số bmi của bạn là : ${bmi} bạn là người thừa cân`);

// }
// else {
//     alert(` chỉ số bmi của bạn là ${bmi} bạn béo quá hãy giảm cân đi`);
// }
