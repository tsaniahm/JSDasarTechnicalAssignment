/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/// Banyak variable scope pada javascript adalah sebanyak 3 yaitu blocks scope, global scope dan local scope
/// BLOCKS SCOPE -> pengkodean deklarasi suatu variabel di dalam {} 
/// GLOBAL SCOPE -> Berarti suatu variable dapat diakses dimana saja, hal ini karena pendeklarasian variablenya berada di luar blocks
/// LOCAL SCOPE -> pengkodean deklarasi suatu variable yang terbatas hanya didalam blocks seperti function, conditional, dan looping, sehingga variabel yan dibuat tidak dapat diakses diluar blocks

//IMPLEMENTASI
const nama = "Tsaniah Munfidah" // GLOBAL SCOPE
const asal = "Jogja"//GLOBAL SCOPE

function show(nama) {
  const umur = 20 //LOCAL AND BLOCK SCOPE , dimana tidak dapat diakses diluar function
  console.log(`Nama : ${nama} \nUmur : ${umur}`)
  console.log(asal) //variable asal dapat dipanggil di dalam function karena merupakan variable global
}

show(nama)

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam comsole.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
/*Yang akan tampil di dalam console.log adalah Mariah, hal ini dikarenakan nama yang dibawah oleh parameter
displit atau dipisah menggunakan split("") sehingga terbagi menjadi array dengan index ke 0 adalah Mariah dan index ke 1 adalah Carey, 
kemudian [0] menunjukkan bahwa index yang diambil hanyalah index ke 0 yaitu Mariah, sehingga yang direturn dan tampil adalah Mariah*/

/*Alasan mengapa hasil console bukan dari variable name adalah karena, console telah memanggil function  printFirstName(name) dimana parameter -
name sendiri telah di isikan dengan value Mariah Carey yang di tulis pada console. */

const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
