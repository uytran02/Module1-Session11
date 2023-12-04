//ex1
const array = ["Trần Đức Uy", 1, true, NaN, null, undefined, ["a", 1, true]];

const arrayInteger = [2, 8, 2, 5, 3, 1, 1, 2, 9, 3, 3, 8, 8];
console.log("Mảng dùng cho cả 7 câu: ", arrayInteger);

//ex3
let sumArrayInteger = 0;
for (let i = 0; i < arrayInteger.length; ++i) {
  sumArrayInteger += arrayInteger[i];
}
console.log("Tổng các phần tử trong mảng: ", sumArrayInteger);

//ex2
const arrayEvenNum = [];
for (let i = 0; i < arrayInteger.length; ++i) {
  if (arrayInteger[i] % 2 == 0) {
    arrayEvenNum.push(arrayInteger[i]);
  }
}
console.log("Mảng chứa các số chẵn: ", arrayEvenNum);

//ex5: tổng số chẵn, tổng số lẻ
let sumEvenArrayInteger = 0;
let sumOddArrayInteger = 0;
for (let i = 0; i < arrayInteger.length; ++i) {
  if (arrayInteger[i] % 2 === 0) {
    sumEvenArrayInteger += arrayInteger[i];
  }
  if (arrayInteger[i] % 2 !== 0) {
    sumOddArrayInteger += arrayInteger[i];
  }
}
console.log("Tổng các số chẵn: ", sumEvenArrayInteger);
console.log("Tổng các số lẻ: ", sumOddArrayInteger);

//ex4
//dùng phương thức có sẵn
// console.log(arrayInteger.sort());
//cách thủ công
let tempt = arrayInteger[0];
for (let i = 0; i < arrayInteger.length - 1; ++i) {
  for (let j = i + 1; j < arrayInteger.length; j++) {
    if (arrayInteger[i] > arrayInteger[j]) {
      tempt = arrayInteger[j];
      arrayInteger[j] = arrayInteger[i];
      arrayInteger[i] = tempt;
    }
  }
}
console.log("Mảng sắp xếp theo thứ tự tăng dần: ", arrayInteger);

//EX6:
// Bước 1: Tạo ra một mảng b, chỉ gồm các phần tử khác nhau
// Bước 2: Tạo thêm mảng c lưu giá trị khi đếm số lần xuất hiện của mỗi phần tử ở mảng b trong mảng arrayInteger
// Giá trị lớn nhất của mảng c chính là số lần xuất hiện nhiều nhất. và với b[i] tương ứng ta biết được phần tử nào xuất hiện nhiều nhất
// Bước 3: Nếu có từ 2 phần tử xuất hiện nhiều nhất, tạo mảng d để lưu vị trí của các phần tử cùng xuất hiện nhiều nhất

//EX7 + Bước 1: Loại bỏ phần tử trùng lặp, cho vào mảng mới
let array2 = [];
let array2Index = 0; //Index của mảng array2
for (let i = 0; i < arrayInteger.length; ++i) {
  let count = 0;
  if (arrayInteger[i] == arrayInteger[i + 1]) {
    //làm được bước này là do đã sắp xếp theo thứ tự từ trước
    ++count;
  }
  if (count == 0) {
    array2[array2Index] = arrayInteger[i];
    ++array2Index;
  }
}
console.log("Mảng sau khi loại bỏ phần tử trùng nhau là", array2);

// Bước 2: Tạo thêm mảng array3 lưu giá trị khi đếm số lần xuất hiện của mỗi phần tử ở mảng array2 trong mảng arrayInteger
let array3 = [];

for (let i = 0; i < array2.length; ++i) {
  array3[i] = 0;
  for (let j = 0; j < arrayInteger.length; ++j) {
    if (array2[i] == arrayInteger[j]) {
      array3[i]++;
    }
  }
}
console.log("Số lần xuất hiện của các phần tử theo thứ tự là", array3);

//Bước 3: Tìm ra phần tử lớn nhất trong mảng array3, lấy index của nó áp vào array2 là ra phần tử xuất hiện nhiều nhất
//3.1: Lấy được index và
let max = array3[0]; //max chính là số lần xuất hiện nhiều nhất
let maxIndex = 0;
let quantityOfMax = 1;
for (let i = 0; i < array3.length; ++i) {
  if (max < array3[i]) {
    max = array3[i];
    maxIndex = i;
    quantityOfMax = 1;
  }
}
for (let i = array3.length - 1; i > maxIndex; --i) {
  if (max == array3[i]) {
    quantityOfMax++;
  }
}
if (quantityOfMax == 1) {
  console.log(
    ` Phần tử xuất hiện nhiều nhất là ${array2[maxIndex]} với ${max} lần`
  );
} else {
  let array4 = []; //array4 để lưu Index các phần tử có số lần xuất hiện lớn nhất
  let array4Index = 0;
  for (let i = 0; i < array3.length; ++i) {
    if (array3[i] == max) {
      array4[array4Index] = i;
      array4Index++;
    }
  }
  console.log(` Các phần tử xuất hiện nhiều nhất là`);
  for (let i = 0; i < array4.length; ++i) {
    console.log(array2[array4[i]]);
  }
  console.log("với", quantityOfMax, "lần xuất hiện");
}
