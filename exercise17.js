function kaliTerusRekursif(angka) {
    var str = angka.toString();
    var hasilKali = 1;

    if(str.length == 1){
        return angka;
    }

    for(i = 0; i < str.length; i++){
        hasilKali *= parseInt(str[i]);
    }
    return kaliTerusRekursif(hasilKali);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6 