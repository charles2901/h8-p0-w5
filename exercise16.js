function totalDigitRekursif(angka) {
    var jumlah = 0;

    if(angka.toString().length == 1){
        return angka;
    }

    var str = angka.toString();
    jumlah += parseInt(str[0]);
    var newStr = '';

    for(i = 1; i < str.length; i++){
        newStr += str[i];
    }

    return jumlah + totalDigitRekursif(parseInt(newStr))


}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5 