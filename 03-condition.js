/// Soal - 01
/// Buatlah sebuah kondisi dimana akan melakukan pengecekan terhadap user yang hendak bepergian menggunakan motor, ada beberapa hal yang perlu dilakukan salah satu-nya adalah
/// - kondisi dibuat menggunakn IF ELSE
/// - kondisi pertama akan mengecek apakah user sudah berusia kurang dari 18 tahun
/// - jika IYA, maka cetak tulisan "Anda belum cukup umur"
/// - jika TIDAK
///   buatlah kondisi lagi dimana akan melakukan cek terhadap user tersebut, apakah dia sudah memiliki SIM atau belum
///   - jika IYA, maka cetak tulisan "Selamat berkendara"
///   - jika Tidak, maka cetak tulisan "Diharapkan untuk membuat SIM terlebih dahulu"

const userAge = 18;
const drivingLicense = true;
/// EDIT HERE
if (userAge < 18) {
    console.log("Anda belum cukup umur")
} else {
    drivingLicense ? console.log("Selamat berkendara") : console.log("Diharapkan untuk membuat SIM terlebih dahulu")
}

/// Soal - 02
/// Buatlah sebuah kondisi yang akan melakukan konversi suhu dari celcius ke variable yang dituju (kelvin, fahrenheit, dan celsius)
/// - kondisi dibuat menggunakan switch case
/// - konversi celcius menjadi kelvin apabila user memasukan unit berupa "K"
/// - konversi celcius menjadi fahrenheit apabila user memasukan unit berupa "F"
/// - konversi celcius menjadi celcius apabila user memasukan unit berupa "C"
/// - menampilkan pesan "Maaf anda salah input", apabila variable tidak memenuhi semua kondisi yang ada
const temperature = 100; /// suhu
const unit = "F"; /// inputan
let result = 0;
switch (unit) {
    /// EDIT HERE
    case "K": result = temperature + 273
        break;
    case "F": result = ((9 / 5) * temperature) + 32
        break;
    case "C": result = temperature
        break;
    default: result = "Maaf anda salah input"
}

console.log(result)
