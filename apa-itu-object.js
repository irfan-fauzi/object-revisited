// singkatnya Object adalah array yang lebih powerfull, jika array adalah kumpulan data yang memiliki index, maka object adalah kumpulan nilai yang memiliki nama (tidak ada index [0,1,2,3, ...] seperti array ), persis seperti array,tetapi bisa melakukan hal yang lebih kompleks

// Contoh Object sederhana :
// ini dinamakan object literal
let mahasiswa = {
    name: 'irfan fauzi',
    usia: 25,
    ips: [3.33, 2.38, 4.00],
    // kita bisa membuat object didalam object
    alamat: {
        kelurahan: 'tarikolot',
        kabupaten: 'majalengka',
        kodepos: 45411
    }
}
// Function Declaration
// sebuah object bisa dibuat didalam function
// parameter diisi dengan properti object nya
function buatObjectMahasiswa(nama, alamat, nim, jurusan, ipk) {
    // {} = buat object kosong sebagai tempat penyimpanan
    let mhs = {};
    // deklarasikan property object dengan parameter functionnya
    mhs.nama = nama;
    mhs.alamat = alamat;
    mhs.nim = nim;
    mhs.jurusan = jurusan;
    mhs.ipk = ipk;
    // karena berada dalam function, maka ia harus mengembalikan nilai
    return mhs;
}
// untuk megisi objectnya , kita harus panggil functionnya beserta argumennya   
let mhs1 = buatObjectMahasiswa('irfan', 'majalengka', 90909034, 'teknik kimia', [3.33, 4.33, 2.01]);
// cara diatas bisa dibilang lebih ringkas, karena kita cukup membuat functionnya satu kali dan untuk mengisinya kita tinggal membuat variable baru dan isi objectnya secara manual
// ------------------------------------------------------------------

// CONSTRUCTOR
// Penggunaan contrctor ini sama dengan function declaration, tetapi bedanya contructor ini memang dikhususkan untuk membuat object,
// 
function Mahasiswa(nama, alamat, nim, jurusan, ipk) {
    // menggunakan cara constructor, cukup menggunakan this
    this.nama = nama;
    this.alamat = alamat;
    this.nim = nim;
    this.jurusan = jurusan;
    this.ipk = ipk;
    // tidak perlu menggunakan return seperti function declaration
}
// cara panggilnya menggunakan keyword new
const mhs2 = new Mahasiswa('irfan', 'majalengka', 90909034, 'teknik kimia', [3.33, 4.33, 2.01]);














































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
// let hasilIpk = hitungRataRata(ipSemester);
// console.log(hasilIpk);
// ----------------------------------------------------------------
// jika kamu menggunkan object maka kodenya akan seperti ini :
let dataMhs = {
    namaMhs: 'irfan',
    nim: 9898234,
    prodi: 'teknik komputer',
    ipSemester: [2.90, 3.30, 3.25, 2.20, 3.04],
    hitungRataRata: function () {
        // total = nilai awal yang sengaja dikosongkan untuk menampung hasil penjumlahan setiap elemmen array
        let total = 0;
        let ips = this.ipSemester
        ips.forEach(function (e) {
            total += e;
        })
        return total / ips.length;
    }
};