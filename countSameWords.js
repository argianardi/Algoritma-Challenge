const countSameWords = (input, query) => {
  // inisialisasi  variabel result untuk menampung hasil akhir
  let result = [];

  // lakukan iterasi dua dimensi untuk query dan dilanjutkan unuk input di itersi kedua, kemudian bandingan setiap value pada queary dengan semua value di input. Jika terdapat value yang sama catat jumlahnya di variable result
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
console.log(countSameWords(['xc', 'dz', 'bbb', 'dz'], ['bbb', 'ac', 'dz']));
