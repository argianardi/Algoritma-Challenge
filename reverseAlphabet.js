const reverseAlphabet = (alphabet) => {
  // deklarasikan variabel number untuk menampung character angka
  let number = '';
  // deklarasikan variabel reverseCharacter untuk karakter yang posisinya dibalik
  let reverseCharacter = '';

  // iterasi semua karakter dan periksa jika ada angka maka masukkan angka tersebut ke dalam variable number dan hapus angka tersebut dari alphabet
  for (let i = 0; i < alphabet.length; i++) {
    if (/\d/.test(alphabet[i])) {
      number += alphabet[i];
      alphabet = alphabet.replace(1, '');
    }
  }

  // iterasi semua character di dalam alphabet tanpa angka dan ganti posisi masing masing karakter agar posisinya menjadi terbalik
  for (let i = 0; i < alphabet.length; i++) {
    reverseCharacter += alphabet[alphabet.length - 1 - i];
  }

  // return hasil akhir, karakter yang sudah dibalik plus karakter angka
  return reverseCharacter + number;
};
console.log(reverseAlphabet('NEGIE1'));
