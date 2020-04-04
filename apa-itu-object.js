// singkatnya Object adalah array yang lebih powerfull, jika array adalah kumpulan data yang memiliki index, maka object adalah kumpulan nilai yang memiliki nama (tidak ada index [0,1,2,3, ...] seperti array ), persis seperti array,tetapi bisa melakukan hal yang lebih kompleks
// contoh tidak menggunakan object :
const namaMhs = 'irfan';
const nim = 9898234;
const prodi = 'teknik komputer';
let ipSemester = [2.90, 3.30, 3.25, 2.20, 3.04];
let hitungRataRata = function (param) {
    // total = nilai awal yang sengaja dikosongkan untuk menampung hasil penjumlahan setiap elemmen array
    let total = 0;
    param.forEach(function (e) {
        total += e;
    })
    return total / param.length;
}
let hasilIpk = hitungRataRata(ipSemester);
console.log(hasilIpk);