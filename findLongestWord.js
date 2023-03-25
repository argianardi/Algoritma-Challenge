const findLongestWord = (sentence) => {
  // pecahkan kalimat menjadi berberapa kata dalam bentuk array yang dipisahkan berdasarkan spasi
  words = sentence.split(" ");
  // deklarasikan variabel longestWord dan longestWordlength untuk menampung 1 kata terpanjang dan nilai panjang kata tersebut
  let longestWord = "";
  let longestWordLength = 0;

  // iterasi setiap array kata, kemudian buat kondisi jika kata ke-i lebih panjang dari kata sebelumnya masukkan kata tersebut kedalam variabel longestWord dan nilai panjang kata tersebut kedalam variabel longestWordLength
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWord = words[i];
      longestWordLength = words[i].length;
    }
  }

  // return hasil akhir berupa kata terpanjang dan nilai panjang dari kata terpanjang tersebut
  return `${longestWord}: ${longestWordLength} character`;
};
console.log(findLongestWord("Saya sangat senang mengerjakan soal algoritma"));
