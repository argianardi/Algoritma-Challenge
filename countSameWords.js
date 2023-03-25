// const countSameWords = (input, query) => {
//   // buat sebuah function dengan nama `countSameWords` dengan dua parameter, yaitu `input` dan `query`
//   let result = []; // inisialisasi variabel `result` dengan array kosong

//   for (let i = 0; i < query.length; i++) {
//     // Lakukan perulangan dengan `for` pada setiap elemen pada `query`
//     let count = 0; // inisialisasi variabel `count` dengan 0

//     for (let j = 0; j < input.length; j++) {
//       // Lakukan perulangan kedua dengan `for` pada setiap elemen pada `input`
//       if (query[i] === input[j]) {
//         // lakukan pengecekan apakah kata pada elemen `query` sama dengan kata pada elemen `input`
//         count += 1; // jika sama, maka variabel `count` akan ditambahkan 1
//       }
//     }

//     result.push(count); // Setelah selesai melakukan perulangan kedua, hasil dari variabel `count` akan dimasukkan ke dalam variabel `result`
//   }

//   console.log(result); // Setelah selesai melakukan perulangan pertama, output hasil yang terdapat pada variabel `result`
// };

// countSameWords(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]); // panggil fungsi `countSameWords` dan berikan parameter ["xc", "dz", "bbb", "dz"] dan ["bbb", "ac", "dz"]

const countSameWords = (input, query) => {
  // inisialisasi  variabel result untuk menampung hasil akhir
  let result = [];

  //   lakukan iterasi dua dimensi untuk query dan dilanjutkan unuk input di itersi kedua, kemudian bandingan setiap value pada queary dengan semua value di input. Jika terdapat value yang sama catat jumlahnya di variable result
  for (let i = 0; i < query.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        count += 1;
      }
    }
    result.push(count);
  }
  return result;
};
console.log(countSameWords(["xc", "dz", "bbb", "dz"], ["bbb", "ac", "dz"]));
