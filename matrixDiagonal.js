const matrixDiagonal = (matrix) => {
  // deklarasikan variabel untuk menampung hasil penjumlahan diagonal pertama dan kedua matrix
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  // iterasi array matrix
  for (let i = 0; i < matrix.length; i++) {
    // jumlahkan semua value array yang berada di diagonal pertama
    firstDiagonal += matrix[i][i];
    // jumlahkan semua value array yang berada di diagonal kedua
    secondDiagonal += matrix[i][matrix.length - 1 - i];
  }

  // Kurangkan hasil penjumlahan kedua diagonal dan return hasilnya
  return Math.abs(firstDiagonal - secondDiagonal);
};

console.log(
  matrixDiagonal([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
