/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/// - Type Error -> error ini muncul ketika jenis (angka, string, dan sebagainya) yang diakses tidak kompatibel, misal mengakses properti dalam jenis variabel yang tidak ditentukan.
/// - Reference Error -> Simplenya adalah error ini akan muncul ketika kita menggunakan variable yang belum dideklarasikan
/// - Range Error -> eror ini akan muncul ketika kita menggunakan variabel numeric atau parameter yang berada diluar rentang nilai yang valid
/// - Syntax Error -> error ini akan muncul ketika kita mencoba mengevaluasi kode dengan kesalahan sintaks.

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
/* Saat kode dijalankan terjadi error(salaryWithConst is not defined), 
dimana error yang terjadi termasuk ke dalam kategori ReferenceError hal ini dikarenakan
conso.log(salaryWithConst) dipanggil sebelum dideklarasikan. inilah mengapa console.log(salaryWithVar) tidak error dan 
console.log(salaryWithConst) error, hal ini karena const merupakan constant dan HARUS DIDEKLARASIKAN SEBELUM DIPANGGIL sedangkan var tidak*/

console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
