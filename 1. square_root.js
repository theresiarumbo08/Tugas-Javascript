const prompt = require('prompt-sync')({sigint: true});

const x = parseInt(prompt('Masukkan bilangan x: '));

if(x<0){
    console.log("Tidak bisa input bilangan negatif");
} else if (x%2!=0){
    console.log("Tidak bisa input bilangan ganjil");
} else if (x%2==0){
    var result = Math.sqrt(x);
    console.log(`Akar pangkat dua dari ${x} adalah `, result)
}


