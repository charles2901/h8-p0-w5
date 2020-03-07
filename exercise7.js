function hapusSimbol(str){
    var result = '';
    for(i = 0; i < str.length; i++){
        if( (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')){
            result += str[i]
        }
    }
    return result;
}

//dengan regex
// function hapusSimbol(str) {
//     var regexPattern = new RegExp('[a-z]|[0-9]');
//     var result = '';
//     for(let i = 0; i < str.length; i++){
//         if(regexPattern.test(str[i])){
//             result += str[i];
//         }
//     }
//     return result;
// }
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100