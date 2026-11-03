const namaSiswa = [
    "Andi",
    "Budi",
    "Citra",
    "Dedi",
    "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

// 1. Tampilkan jumlah siswa
console.log("Jumlah siswa:", namaSiswa.length);

// 2. Tampilkan nama dan nilai siswa pertama
console.log("Nama siswa pertama:", namaSiswa[0]);
console.log("Nilai siswa pertama:", nilaiSiswa[0]);

// 3. Tampilkan nama dan nilai siswa terakhir
console.log("Nama siswa terakhir:", namaSiswa[namaSiswa.length - 1]);
console.log("Nilai siswa terakhir:", nilaiSiswa[nilaiSiswa.length - 1]);

// 4. Perbarui nilai Budi dari 75 menjadi 88
nilaiSiswa[1] = 88;

// 5. Perbarui nilai Eko dari 70 menjadi 82
nilaiSiswa[4] = 82;

// 6. Tampilkan nama dan nilai siswa ketiga
console.log("Nama siswa ketiga:", namaSiswa[2]);
console.log("Nilai siswa ketiga:", nilaiSiswa[2]);

// 7. Tampilkan seluruh isi kedua Array setelah pembaruan
console.log("Seluruh nama siswa:", namaSiswa);
console.log("Seluruh nilai siswa:", nilaiSiswa);

// Tantangan tambahan (opsional)
const indeks = 4;

if (indeks < namaSiswa.length) {
    console.log("Nama siswa:", namaSiswa[indeks]);
} else {
    console.log("Indeks tidak tersedia");
}